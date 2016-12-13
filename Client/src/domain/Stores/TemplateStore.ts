import MonsterTemplate from '../MonsterTemplate';
import Monster from "../Monster";

export default class TemplateStore
{
    templates: Array<MonsterTemplate>;
    selectedTemplate: MonsterTemplate;
    
    constructor() {
        let defaultTemplate = new MonsterTemplate("Test Template");
        defaultTemplate.addMonster(new Monster("Default Monster1"));
        defaultTemplate.addMonster(new Monster("Default Monster2"));

        this.templates = [defaultTemplate];
    }
}