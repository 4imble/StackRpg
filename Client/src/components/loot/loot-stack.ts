import {autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as Item from "../../domain/AllItems";
import * as Recipes from "../../domain/AllRecipies";
import * as MonsterRecipe from "../../domain/Recipies/MonsterRecipe";
import ItemFactory from "../../factories/ItemFactory";
import Dice from "../../helpers/Dice";
import LootDropper from "../../helpers/LootDropper";
import { MonsterKilled, GoldTaken } from '../../messages';

@autoinject
export class LootStack {
    stack: Array<Item.Loot> = [];
    
    constructor(private eventAggregator: EventAggregator, private lootDropper: LootDropper) {
        
        this.eventAggregator.subscribe(MonsterKilled, (msg: MonsterKilled) => {
            var loots = lootDropper.generateLoot(msg.monster);

            loots.forEach(loot => {
                this.stack.push(loot);
            });
        });
    }
    
    takeItem(lootItem: Item.Loot){
        lootItem.take();
        this.stack.remove(lootItem);
    }
}