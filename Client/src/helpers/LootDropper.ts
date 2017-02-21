import { autoinject } from 'aurelia-framework';
import Player from '../Domain/Player';
import Monster from '../Domain/Monster';
import PlayerStore from '../domain/Stores/PlayerStore';
import ItemFactory from '../factories/ItemFactory';
import Dice from "../helpers/Dice";
import * as Item from "../domain/AllItems";

@autoinject
export default class LootDropper {
    constructor(protected itemFactory: ItemFactory, protected playerStore: PlayerStore) { 

    }

    generateLoot(monster: Monster) : Item.Loot[] {
        let itemsToDrop: Item.Loot[] = [];
        
        if(Dice.binaryChance(40))
            itemsToDrop.push(this.itemFactory.buildGold()); 
        
        if(Dice.binaryChance(10))
            itemsToDrop.push(this.itemFactory.buildWeapon("Thunderfury, Blessed Blade of the Windseeker"));

        if(Dice.binaryChance(10))
            itemsToDrop.push(this.itemFactory.buildRecipe());
            
        return itemsToDrop;
    }
}