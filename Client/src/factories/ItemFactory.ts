import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import * as Item from '../domain/AllItems';
import * as Recipes from '../domain/AllRecipies';
import PlayerStore from '../domain/Stores/PlayerStore';
import Monster from '../domain/Monster';
import Dice from "../helpers/Dice";

@autoinject
export default class ItemFactory {
    constructor(private eventAggregator: EventAggregator, private playerStore: PlayerStore) { }

    buildGold(): Item.Gold {
        let newGold = new Item.Gold(this.eventAggregator);
        newGold.value = Dice.d20();
        return newGold;
    }

    buildWeapon(name: string): Item.Weapon {
        let newWeapon = new Item.Weapon(this.eventAggregator);
        newWeapon.name = name;
        newWeapon.damage = Dice.d20();
        return newWeapon;
    }

    buildRecipe(level:number = this.playerStore.currentPlayer.level + 1): Item.Recipe {
        let recipeLoot = new Item.Recipe(this.eventAggregator);
        let newRecipe = new Recipes.DragonRecipe();
        
        newRecipe.level = level;
        recipeLoot.recipe = newRecipe;
        
        return recipeLoot;
    }
}
