import { autoinject } from 'aurelia-framework';
import MonsterTemplate from '../MonsterTemplate';
import Monster from "../Monster";
import MonsterFactory from '../../factories/MonsterFactory';

@autoinject
export default class TemplateStore
{
    templates: Array<MonsterTemplate>;
    selectedTemplate: MonsterTemplate;
    
    constructor(private monsterFactory: MonsterFactory) {
        let defaultTemplate = new MonsterTemplate("Test Template");
        defaultTemplate.addMonster(monsterFactory.buildMonster("Default Monster1"));
        defaultTemplate.addMonster(monsterFactory.buildMonster("Default Monster2"));

        this.templates = [defaultTemplate];
    }
}