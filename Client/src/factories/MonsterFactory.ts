import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/Monster';

@autoinject
export default class MonsterFactory {
    constructor(private eventAggregator: EventAggregator) { }

    cloneMonster(monster: Monster){
        return Object.assign(this.buildMonster(monster.name), monster);
    }

    buildMonster(name: string): Monster {
        let monster = new Monster(this.eventAggregator, name);
        monster.strength = 9;
        monster.toughness = 10;
        monster.dexterity = 13;

        return monster;
    }
}
