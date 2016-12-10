import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import TemplateStore from '../domain/Stores/TemplateStore';
import MonsterTemplate from '../domain/MonsterTemplate';

@inject(TemplateStore)
export class TemplateBag {
    constructor(private templateStore: TemplateStore){

    }

    alertMonster(monster){
        alert(monster.name);
    }
}