import { EventAggregator } from 'aurelia-event-aggregator';

export abstract class Loot {
    constructor(protected eventAggregator: EventAggregator) {}

    template: string;
    abstract get displayName();
    abstract showToolTip();
    abstract take();
    abstract use();
}