import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/monster';
import PlayerStore from '../domain/Stores/PlayerStore';
import * as Recipe from '../domain/AllRecipies';

@autoinject
export default class MonsterFactory {
    constructor(private eventAggregator: EventAggregator, private playerStore: PlayerStore) { }

    buildMonster(recipe: Recipe.MonsterRecipe): Monster {
        let monster = new Monster(this.eventAggregator, recipe.name);

        monster.recipe = recipe;
        monster.baseHealth = recipe.baseHealth;
        monster.strength = recipe.baseStrength;
        monster.toughness = recipe.baseToughness;
        monster.dexterity = recipe.baseDexterity;

        monster.levelUp(recipe.level-1);
        
        return monster;
    }
}
