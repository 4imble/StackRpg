import { inject, bindable } from 'aurelia-framework';
import { ShowModalWindow } from '../messages';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class ModalContent {
    @bindable id: string;
    @bindable visibility: boolean;

    constructor(private eventAggregator: EventAggregator) {
        eventAggregator.subscribe(ShowModalWindow, (msg: ShowModalWindow) => {
            this.visibility = this.id === msg.id;
        })
    }

    close(){
        this.visibility = false;
    }
}