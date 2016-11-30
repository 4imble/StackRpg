import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class PlayerTemplates {

    constructor(private eventAggregator: EventAggregator) {

    }
}