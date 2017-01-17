import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Heartbeat } from '../messages';

@inject(EventAggregator)
export default class GameLoop {
    constructor(private eventAggregator: EventAggregator) { }

    start()
    {        
        setInterval(() => {
            this.eventAggregator.publish(new Heartbeat());
        }, 2000);
    }
}
