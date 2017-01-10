import Body from "./Body";
import { MonsterKilled } from '../messages';

export default class Monster extends Body {
    takeDamage(damage:number) {
        this.damageTaken += damage;

        if (this.hasDied) {
            this.eventAggregator.publish(new MonsterKilled(this));
        }
    }
}