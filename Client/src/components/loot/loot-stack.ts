import {inject, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as Item from "../../domain/AllItems";
import { MonsterKilled, GoldTaken } from '../../messages';

@inject(EventAggregator)
export class LootStack {
    stack: Array<Item.Loot> = [];
    
    constructor(private eventAggregator: EventAggregator) {
        this.eventAggregator.subscribe(MonsterKilled, () => {
            this.stack.push(new Item.Gold()); 
            this.stack.push(new Item.Weapon("Thunderfury, Blessed Blade of the Windseeker"));
        });
    }
    
    takeItem(lootItem: Item.Loot){
        this.eventAggregator.publish(lootItem.take())
        this.stack.remove(lootItem);
    }
}