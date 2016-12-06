import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/Monster';
import MonsterTemplate from '../domain/MonsterTemplate';
import { MonsterAdded, Heartbeat, MonsterKilled } from '../messages';

@inject(EventAggregator)
export class MonsterManager {
    bag: Array<Monster>;
    templates: Array<MonsterTemplate>;
    selectedTemplate: MonsterTemplate;

    constructor(private eventAggregator: EventAggregator) {
        this.bag = [new Monster("Grumble"), new Monster("Viqas's Bread")];
        this.templates = [new MonsterTemplate("Template 1"), new MonsterTemplate("Template 2")];
    }
    
    useMonster(monster) 
    {
        this.selectedTemplate.addMonster(monster);
        //this.eventAggregator.publish(new MonsterAdded(monster));
    }

    selectTemplate(template) {
        this.selectedTemplate = template;
    }
}