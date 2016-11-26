import { inject } from 'aurelia-framework';
import { ShowModalWindow } from '../messages';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class MainMenu {
    constructor(private eventAggregator) { }

    open(id: string){
        this.eventAggregator.publish(new ShowModalWindow(id));
    }
}