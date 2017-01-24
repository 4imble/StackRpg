import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from '../domain/Player';
import PlayerStore from '../domain/Stores/PlayerStore';
import { GoldTaken, Heartbeat } from '../messages';

@inject(EventAggregator, PlayerStore)
export class PlayerOverview {
    currentPlayer: Player;
    
    constructor(private eventAggregator: EventAggregator, private playerStore: PlayerStore) {
        this.currentPlayer = this.playerStore.currentPlayer;

        this.eventAggregator.subscribe(GoldTaken, (msg: GoldTaken) => {
            this.currentPlayer.gold += msg.goldItem.value;
        });
    }
}