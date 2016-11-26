import {inject, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import Loot from "../../domain/Loot";
import Gold from "../../domain/Gold";
import Weapon from "../../domain/Weapon";
import { MonsterKilled, ItemTaken } from '../../messages';

@inject(EventAggregator)
export class LootStack {
    stack: Array<Loot> = [];
    
    constructor(private eventAggregator: EventAggregator) {
        this.eventAggregator.subscribe(MonsterKilled, () => {
            this.stack.push(new Gold()); 
            this.stack.push(new Weapon("Thunderfury, Blessed Blade of the Windseeker"));
        });
    }
    
    takeItem(lootItem: Loot){
        //this.eventAggregator.publish(new ItemTaken(lootItem));
        lootItem.showToolTip();
        this.stack.remove(lootItem);
    }
}