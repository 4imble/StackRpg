import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/Monster';
import PlayerStore from '../domain/Stores/PlayerStore';
import * as Recipe from '../domain/AllRecipies';

@autoinject
export default class MonsterFactory {
    constructor(private eventAggregator: EventAggregator, private playerStore: PlayerStore) { }

    buildMonster(recipe: Recipe.MonsterRecipe): Monster {
        let monster = new Monster(this.eventAggregator, recipe.name);

        monster.baseHealth = recipe.baseHealth;
        monster.strength = recipe.baseStrength;
        monster.toughness = recipe.baseToughness;
        monster.dexterity = recipe.baseDexterity;

        this.levelUp(monster, recipe, recipe.level);
        
        return monster;
    }

    //Maybe this should be in monster?
    levelUp(monster: Monster, recipe: Recipe.MonsterRecipe, levels: number)
    {
        for(var i = 0; i < levels; i++)
        {
            monster.baseHealth += recipe.healthPerLevel();
            monster.strength += recipe.strengthPerLevel();
            monster.toughness += recipe.toughnessPerLevel();
            monster.dexterity += recipe.dexterityPerLevel();
        }
    }
}
