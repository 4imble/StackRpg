import Attribute from "../helpers/Attribute";

abstract class Body {
    baseHealth: number = 10;
    damageTaken: number = 0;
    level: number = 1;

    strength: number = 10;
    toughness: number = 10;
    dexterity: number = 10;

    constructor(public name: string) {}

    get totalHealth() {
        let toughnessModifier = Attribute.getModifier(this.toughness);
        return (this.baseHealth + toughnessModifier) - this.damageTaken;
    };

    get currentHealth() {
        return this.totalHealth - this.damageTaken;
    };

    abstract takeDamage(damage:number);
}

export default Body;