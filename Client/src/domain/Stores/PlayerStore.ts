import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from "../Player";
import * as Item from "../AllItems";
import BodyFactory from "../../factories/BodyFactory"
import { Heartbeat, MonsterKilled } from '../../messages';

@autoinject
export default class PlayerStore {
    currentPlayer: Player;
    inventory: Array<Item.Loot> = [];

    constructor(private eventAggregator: EventAggregator, bodyFactory: BodyFactory) {
        this.currentPlayer = bodyFactory.buildPlayer("Test Factory Player");

        this.eventAggregator.subscribe(Heartbeat, (msg: Heartbeat) => {
            this.currentPlayer.healDamage(1);
        });

        this.eventAggregator.subscribe(MonsterKilled, (msg: MonsterKilled) => {
            this.currentPlayer.experience += 4000;
        });
    }
}