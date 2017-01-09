import {autoinject, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as Item from "../../domain/AllItems";
import ItemFactory from "../../factories/ItemFactory";
import { MonsterKilled, GoldTaken } from '../../messages';

@autoinject
export class LootStack {
    stack: Array<Item.Loot> = [];
    
    constructor(private eventAggregator: EventAggregator, private itemFactory: ItemFactory) {
        this.eventAggregator.subscribe(MonsterKilled, () => {
            this.stack.push(itemFactory.buildGold()); 
            this.stack.push(itemFactory.buildWeapon("Thunderfury, Blessed Blade of the Windseeker"));
        });
    }
    
    takeItem(lootItem: Item.Loot){
        lootItem.take();
        this.stack.remove(lootItem);
    }
}