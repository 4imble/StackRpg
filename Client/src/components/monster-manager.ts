import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/Monster';
import TemplateStore from '../domain/Stores/TemplateStore';
import MonsterTemplate from '../domain/MonsterTemplate';
import { MonsterAdded, Heartbeat, MonsterKilled } from '../messages';

@inject(EventAggregator, TemplateStore)
export class MonsterManager {
    bag: Array<Monster>;

    constructor(private eventAggregator: EventAggregator, private templateStore: TemplateStore) {
        this.bag = [new Monster("Grumble"), new Monster("Viqas's Bread")];
        templateStore.templates.push(new MonsterTemplate("Template 1"));
    }
    
    useMonster(monster) 
    {
        this.templateStore.selectedTemplate.addMonster(monster);
        //this.eventAggregator.publish(new MonsterAdded(monster));
    }

    selectTemplate(template) {
        this.templateStore.selectedTemplate = template;
    }
}