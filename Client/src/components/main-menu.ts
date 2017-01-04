import { inject } from 'aurelia-framework';
import { ShowModalWindow } from '../messages';
import { EventAggregator } from 'aurelia-event-aggregator';
import PlayerStore from '../domain/Stores/PlayerStore';
import TemplateStore from '../domain/Stores/TemplateStore';

@inject(EventAggregator, PlayerStore, TemplateStore)
export class MainMenu {
    constructor(private eventAggregator, public playerStore: PlayerStore, public templateStore: TemplateStore) { }

    open(id: string) {
        this.eventAggregator.publish(new ShowModalWindow(id));
    }
}