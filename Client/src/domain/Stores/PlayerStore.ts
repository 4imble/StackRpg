import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from "../Player";
import * as Item from "../AllItems";
import PlayerFactory from "../../factories/PlayerFactory"
import { Heartbeat, MonsterKilled } from '../../messages';
import Dice from "../../helpers/Dice";


@autoinject
export default class PlayerStore {
    currentPlayer: Player;
    inventory: Array<Item.Loot> = [];

    constructor(private eventAggregator: EventAggregator, playerFactory: PlayerFactory) {
        this.currentPlayer = playerFactory.buildPlayer("Test Factory Player");

        this.eventAggregator.subscribe(Heartbeat, (msg: Heartbeat) => {
            this.currentPlayer.healDamage(1);
        });

        this.eventAggregator.subscribe(MonsterKilled, (msg: MonsterKilled) => {
            this.currentPlayer.experience += Dice.rollSides(500);
        });
    }
}