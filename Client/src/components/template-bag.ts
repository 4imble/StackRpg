import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import TemplateStore from '../domain/Stores/TemplateStore';
import MonsterTemplate from '../domain/MonsterTemplate';
import { TemplateUsed } from '../messages';

@inject(EventAggregator, TemplateStore)
export class TemplateBag {
    constructor(private eventAggregator: EventAggregator, private templateStore: TemplateStore){

    }

    spawnTemplate(template: MonsterTemplate){
        this.eventAggregator.publish(new TemplateUsed(template));
    }
}