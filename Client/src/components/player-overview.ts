import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from '../domain/Player';
import { ItemTaken } from '../messages';

@inject(EventAggregator)
export class PlayerOverview {
    currentPlayer: Player;

    constructor(private eventAggregator: EventAggregator) {
        this.currentPlayer = new Player("Test Player");

        this.eventAggregator.subscribe(ItemTaken, (msg: ItemTaken) => {
            //this.currentPlayer.gold += msg.goldItem.value;
        });
    }
}