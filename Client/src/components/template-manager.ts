import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import * as Recipe from '../domain/AllRecipies';
import TemplateStore from '../domain/Stores/TemplateStore';
import MonsterFactory from '../factories/MonsterFactory';
import MonsterTemplate from '../domain/MonsterTemplate';
import { MonsterAdded, Heartbeat, MonsterKilled } from '../messages';

@autoinject
export class TemplateManager {
    bag: Array<Recipe.MonsterRecipe>;

    constructor(private eventAggregator: EventAggregator, private templateStore: TemplateStore, private monsterFactory: MonsterFactory) {
        this.bag = [new Recipe.KoboldRecipe()];
        templateStore.templates.push(new MonsterTemplate("Template 1"));
    }
    
    addRecipe(recipe: Recipe.MonsterRecipe) 
    {
        this.templateStore.selectedTemplate.addRecipe(recipe);
    }

    selectTemplate(template) {
        this.templateStore.selectedTemplate = template;
    }
}