import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from '../Domain/Player';
import Monster from '../Domain/Monster';
import { Heartbeat } from '../messages';

@inject(EventAggregator)
export default class Combat {
    constructor(private eventAggregator: EventAggregator) { }

    battle(player: Player, monster: Monster)
    {        
        var result = this.calculateBattleResult(player, monster);
    }

    private calculateBattleResult(player: Player, monster: Monster)
    {
        
    }
}
