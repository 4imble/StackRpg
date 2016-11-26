import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from '../domain/Player';
import { GoldTaken } from '../messages';

@inject(EventAggregator)
export class PlayerOverview {
    currentPlayer: Player;

    constructor(private eventAggregator: EventAggregator) {
        this.currentPlayer = new Player("Test Player");

        this.eventAggregator.subscribe(GoldTaken, (msg: GoldTaken) => {
            this.currentPlayer.gold += msg.goldItem.value;
        });
    }
}