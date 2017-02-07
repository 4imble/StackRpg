import Attribute from "../helpers/Attribute";
import Dice from "../helpers/Dice";
import { EventAggregator } from 'aurelia-event-aggregator';

abstract class Body {
    damageTaken: number = 0;
    experience: number = 0;

    baseHealth: number = 10;

    strength: number = 10;
    toughness: number = 10;
    dexterity: number = 10;

    killed: boolean = false;

    constructor(protected eventAggregator: EventAggregator, public name: string) {}

    get level(): number {
        let power = 2.1;
        let root = 1 / power;
        let xpmod = 500;
        return Math.floor(Math.pow(this.experience / xpmod, root))+1
    }

    get baseAttack(): number {
        return 1 * this.level;
    }

    get totalHealth(): number {
        let toughnessModifier = Attribute.getModifier(this.toughness) * this.level;
        return this.baseHealth + toughnessModifier;
    };

    get currentHealth(): number {
        return this.totalHealth - this.damageTaken;
    };

    get currentHealthPercent(): number {
        return Math.floor((this.currentHealth * 100) / this.totalHealth);
    }

    get hasDied(): boolean {
        return this.killed || this.currentHealth <= 0;
    }

    calculateDodgeRoll(): number {
        return Attribute.getModifier(this.dexterity) + Dice.d20();
    }

    calculateAttackRoll(): number {
        return this.baseAttack + Dice.d20();
    }
    
    calculateDamageRoll(): number {
        return Math.max(Attribute.getModifier(this.strength) + Dice.d6(), 0);
    }

    healDamage(heal:number) {
        if(this.damageTaken > 0)
            this.damageTaken -= heal;
    }

    abstract takeDamage(damage:number);
}

export default Body;