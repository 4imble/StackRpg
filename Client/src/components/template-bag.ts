import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import TemplateStore from '../domain/Stores/TemplateStore';
import MonsterTemplate from '../domain/MonsterTemplate';
import { TemplateSpawned, ShowModalWindow } from '../messages';

@inject(EventAggregator, TemplateStore)
export class TemplateBag {
    constructor(private eventAggregator: EventAggregator, private templateStore: TemplateStore) {

    }

    spawnTemplate(template: MonsterTemplate) {
        this.eventAggregator.publish(new TemplateSpawned(template));
    }

    viewTemplate(template: MonsterTemplate) {
        this.templateStore.selectedTemplate = template;
        this.eventAggregator.publish(new ShowModalWindow("player-templates"));
    }
}