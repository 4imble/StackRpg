import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from '../domain/Player';
import Monster from '../domain/Monster';

@autoinject
export default class BodyFactory {
    constructor(private eventAggregator: EventAggregator) { }

    buildPlayer(name: string): Player {
        return new Player(this.eventAggregator, name);
    }

    buildMonster(name: string): Monster {
        return new Monster(this.eventAggregator, name);
    }
}
