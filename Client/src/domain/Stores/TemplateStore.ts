import { autoinject } from 'aurelia-framework';
import MonsterTemplate from '../MonsterTemplate';
import Monster from "../Monster";
import BodyFactory from '../../factories/BodyFactory';

@autoinject
export default class TemplateStore
{
    templates: Array<MonsterTemplate>;
    selectedTemplate: MonsterTemplate;
    
    constructor(private bodyFactory: BodyFactory) {
        let defaultTemplate = new MonsterTemplate("Test Template");
        defaultTemplate.addMonster(bodyFactory.buildMonster("Default Monster1"));
        defaultTemplate.addMonster(bodyFactory.buildMonster("Default Monster2"));

        this.templates = [defaultTemplate];
    }
}