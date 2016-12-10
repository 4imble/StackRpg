import MonsterTemplate from '../MonsterTemplate';

export default class TemplateStore
{
    templates: Array<MonsterTemplate>;
    selectedTemplate: MonsterTemplate;
    
    constructor() {
        this.templates = [];
    }
}