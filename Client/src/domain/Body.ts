import Attribute from "../helpers/Attribute";
import { EventAggregator } from 'aurelia-event-aggregator';

abstract class Body {
    damageTaken: number = 0;
    level: number = 1;

    strength: number = 10;
    toughness: number = 10;
    dexterity: number = 10;

    killed: boolean = false;

    constructor(protected eventAggregator: EventAggregator, public name: string) {}

    get baseHealth() {
        return 10 * this.level;
    }

    get baseAttack() {
        return 1 * this.level;
    }

    get totalHealth() {
        let toughnessModifier = Attribute.getModifier(this.toughness);
        return this.baseHealth + toughnessModifier;
    };

    get currentHealth() {
        return this.totalHealth - this.damageTaken;
    };

    get currentHealthPercent() {
        return Math.floor((this.currentHealth * 100) / this.totalHealth);
    }

    get hasDied() {
        return this.killed || this.currentHealth <= 0;
    }

    abstract takeDamage(damage:number);
}

export default Body;