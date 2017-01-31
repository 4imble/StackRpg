import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from '../domain/Player';

@autoinject
export default class PlayerFactory {
    constructor(private eventAggregator: EventAggregator) { }

    buildPlayer(name: string): Player {
        let player = new Player(this.eventAggregator, name);
        player.strength = 22;
        player.toughness = 14;
        player.dexterity = 16;

        return player;
    }
}
