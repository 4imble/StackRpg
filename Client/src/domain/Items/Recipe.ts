import { Loot } from "./Loot";
import { RecipeTaken } from '../../messages';
import * as Recipes from '../../domain/AllRecipies';
import { EventAggregator } from 'aurelia-event-aggregator';

export class Recipe extends Loot {
    template: string = "recipe";
    recipe: Recipes.MonsterRecipe;

    get displayName() {
        return `${this.recipe.name} recipe (Level: ${this.recipe.level})`;
    }

    showToolTip() { };
    take() { this.eventAggregator.publish(new RecipeTaken(this.recipe)) };
    use() {};
}