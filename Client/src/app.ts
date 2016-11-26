import { inject } from 'aurelia-framework';
import GameLoop from "./helpers/GameLoop";
import { EventAggregator } from 'aurelia-event-aggregator';
import { Heartbeat } from './messages';

@inject(GameLoop, EventAggregator)
export class App {
    timer: number = 0;
    showModal: boolean = false;

    constructor(private gameLoop: GameLoop, private eventAggregator: EventAggregator) {
        this.eventAggregator.subscribe(Heartbeat, () => {
            this.timer ++;
        })
    }

    activate(params, routeConfig) {
        this.gameLoop.start();
    }
}
