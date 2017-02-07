import { autoinject } from 'aurelia-framework';
import MonsterTemplate from '../MonsterTemplate';
import * as Recipe from '../AllRecipies';
import MonsterFactory from '../../factories/MonsterFactory';

@autoinject
export default class TemplateStore
{
    templates: Array<MonsterTemplate>;
    selectedTemplate: MonsterTemplate;
    
    constructor(private monsterFactory: MonsterFactory) {
        let defaultTemplate = new MonsterTemplate("Test Template");
        defaultTemplate.addRecipe(new Recipe.KoboldRecipe());
        defaultTemplate.addRecipe(new Recipe.KoboldRecipe());

        this.templates = [defaultTemplate];
    }
}