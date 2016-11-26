import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ItemTaken } from '../messages';
import * as Item from "../domain/AllItems";

@inject(EventAggregator)
export class PlayerInventory {
stack: Array<Item.Loot> = [];

    constructor(private eventAggregator: EventAggregator) {
        this.eventAggregator.subscribe(ItemTaken, (msg: ItemTaken) => { 
            this.stack.push(msg.item);
        });
    }
}