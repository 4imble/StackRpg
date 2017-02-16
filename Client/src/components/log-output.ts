import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { LoggedMessage } from '../messages';

@inject(EventAggregator)
export class LogOutput {
    logs: Array<string> = [];

    constructor(private eventAggregator: EventAggregator) {

        this.eventAggregator.subscribe(LoggedMessage, (msg: LoggedMessage) => {
            this.logs.unshift(msg.log);
            if (this.logs.length > 10) {
                this.logs.pop();
            }
        });
    }
}