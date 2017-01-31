import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/Monster';
import TemplateStore from '../domain/Stores/TemplateStore';
import MonsterFactory from '../factories/MonsterFactory';
import MonsterTemplate from '../domain/MonsterTemplate';
import { MonsterAdded, Heartbeat, MonsterKilled } from '../messages';

@autoinject
export class MonsterManager {
    bag: Array<Monster>;

    constructor(private eventAggregator: EventAggregator, private templateStore: TemplateStore, private monsterFactory: MonsterFactory) {
        this.bag = [monsterFactory.buildMonster("Grumble"), monsterFactory.buildMonster("Viqas's Bread")];
        templateStore.templates.push(new MonsterTemplate("Template 1"));
    }
    
    useMonster(monster) 
    {
        this.templateStore.selectedTemplate.addMonster(monster);
    }

    selectTemplate(template) {
        this.templateStore.selectedTemplate = template;
    }
}