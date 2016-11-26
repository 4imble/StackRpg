import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/Monster';
import { MonsterAdded, Heartbeat, MonsterKilled } from '../messages';

@inject(EventAggregator)
export class MonsterBag {
    bag: Array<Monster>;

    constructor(private eventAggregator: EventAggregator) {
        this.bag = [new Monster("Grumble"), new Monster("Viqas's Bread")];
    }
    
    useMonster(monster) 
    {
        this.eventAggregator.publish(new MonsterAdded(monster));
    }
}