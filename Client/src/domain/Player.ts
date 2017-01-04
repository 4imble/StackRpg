import Body from "./Body";

export default class Player extends Body
{
    gold: number = 0;

    takeDamage(damage:number) {
        this.damageTaken += damage;
    }
}