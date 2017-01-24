import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from '../domain/Player';
import Monster from '../domain/Monster';

@autoinject
export default class BodyFactory {
    constructor(private eventAggregator: EventAggregator) { }

    buildPlayer(name: string): Player {
        let player = new Player(this.eventAggregator, name);
        player.strength = 16;
        player.toughness = 14;
        player.dexterity = 16;

        return player;
    }

    buildMonster(name: string): Monster {
        let monster = new Monster(this.eventAggregator, name);
        monster.strength = 9;
        monster.toughness = 10;
        monster.dexterity = 13;

        return monster;
    }

    cloneMonster(monster: Monster){
        return Object.assign(this.buildMonster(monster.name), monster);
    }
}
