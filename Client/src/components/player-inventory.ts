import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ItemTaken } from '../messages';
import * as Item from "../domain/AllItems";
import PlayerStore from "../domain/Stores/PlayerStore";

@inject(EventAggregator, PlayerStore)
export class PlayerInventory {
playerInventory: Array<Item.Loot>;

    constructor(private eventAggregator: EventAggregator, private playerStore: PlayerStore) {
        this.playerInventory = playerStore.inventory;

        this.eventAggregator.subscribe(ItemTaken, (msg: ItemTaken) => { 
            this.playerInventory.push(msg.item);
        });
    }
}