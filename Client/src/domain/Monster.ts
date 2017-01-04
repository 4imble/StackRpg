import Body from "./Body";

export default class Monster extends Body {
    takeDamage(damage:number) {
        this.damageTaken += damage;
    }
}