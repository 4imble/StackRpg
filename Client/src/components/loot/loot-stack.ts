import {autoinject, customElement, Container} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as Item from "../../domain/AllItems";
import * as Recipes from "../../domain/AllRecipies";
import * as MonsterRecipe from "../../domain/Recipies/MonsterRecipe";
import ItemFactory from "../../factories/ItemFactory";
import Dice from "../../helpers/Dice";
import { MonsterKilled, GoldTaken } from '../../messages';

@autoinject
export class LootStack {
    stack: Array<Item.Loot> = [];
    
    constructor(private eventAggregator: EventAggregator, private itemFactory: ItemFactory, private container: Container) {
        this.eventAggregator.subscribe(MonsterKilled, () => {
            if(Dice.binaryChance(40))
                this.stack.push(itemFactory.buildGold()); 
            
            if(Dice.binaryChance(10))
                this.stack.push(itemFactory.buildWeapon("Thunderfury, Blessed Blade of the Windseeker"));

            if(Dice.binaryChance(10))
                this.stack.push(itemFactory.buildRecipe());
        });
    }
    
    takeItem(lootItem: Item.Loot){
        lootItem.take();
        this.stack.remove(lootItem);
    }
}