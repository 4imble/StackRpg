import * as Recipe from '../domain/AllRecipies';

export default class MonsterTemplate
{
    recipes: Array<Recipe.MonsterRecipe>;
    
    constructor(public name: string){
        this.recipes = [];
    };

    addRecipe(newRecipe: Recipe.MonsterRecipe){
        this.recipes.push(newRecipe);
    }

    remove(existingRecipe: Recipe.MonsterRecipe){
        this.recipes.remove(existingRecipe);
    }
}