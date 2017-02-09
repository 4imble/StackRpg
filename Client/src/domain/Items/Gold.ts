import { Loot } from "./Loot";
import { GoldTaken } from '../../messages';
import { EventAggregator } from 'aurelia-event-aggregator';

export class Gold extends Loot {
    template:string = "gold";

    value: number;

    get displayName() {
        return `Gold Bag (${this.value})`;
    }

    showToolTip() { };
    take() { this.eventAggregator.publish(new GoldTaken(this)) };
    use() {};
}