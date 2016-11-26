import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ItemTaken } from '../messages';

@inject(EventAggregator)
export class PlayerInventory {

    constructor(private eventAggregator: EventAggregator) {
        
        this.eventAggregator.subscribe(ItemTaken, (msg: ItemTaken) => {
            
        });
    }
}