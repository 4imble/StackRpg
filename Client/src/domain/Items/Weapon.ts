import { Loot } from "./Loot";
import { ItemTaken } from '../../messages';
import { EventAggregator } from 'aurelia-event-aggregator';

export class Weapon extends Loot {
    name: string;
    damage: number;

    get displayName() {
        return this.name;
    }

    showToolTip() { };
    take() { this.eventAggregator.publish(new ItemTaken(this)) };
    use() {};
}