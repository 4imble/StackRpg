import Body from "./Body";
import { MonsterKilled } from '../messages';
import * as Recipe from './AllRecipies';
import Experience from '../helpers/Experience';

export default class Monster extends Body {
    recipe: Recipe.MonsterRecipe;

    takeDamage(damage:number) {
        this.damageTaken += damage;

        if (this.hasDied) {
            this.eventAggregator.publish(new MonsterKilled(this));
        }
    }

    levelUp(levels: number)
    {
        var desiredLevel = this.level + levels;
        var xpForDesiredLevel = Experience.getXpForLevel(desiredLevel);
        var xpForCurrentLevel = Experience.getXpForLevel(this.level);

        this.experience += xpForDesiredLevel - xpForCurrentLevel;

        for(var i = 0; i < levels; i++)
        {
            this.baseHealth += this.recipe.healthPerLevel();
            this.strength += this.recipe.strengthPerLevel();
            this.toughness += this.recipe.toughnessPerLevel();
            this.dexterity += this.recipe.dexterityPerLevel();
        }
    }
}