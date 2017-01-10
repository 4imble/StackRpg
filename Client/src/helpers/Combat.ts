import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from '../Domain/Player';
import PlayerStore from '../domain/Stores/PlayerStore';
import Monster from '../Domain/Monster';
import { Heartbeat } from '../messages';

@autoinject
export default class Combat {
    constructor(private eventAggregator: EventAggregator, private playerStore: PlayerStore) { }

    battle(monsters: Array<Monster>)
    {        
        if(!monsters.length)
            return;

        let player = this.playerStore.currentPlayer;
        let result = this.calculateBattleResult(player, monsters);

        player.takeDamage(result.playerDamage);
        monsters[0].takeDamage(result.monsterDamage);
    }

    private calculateBattleResult(player: Player, monsters: Array<Monster>)
    {
        let battleResult = new BattleResult();
        battleResult.playerDamage = 3;
        battleResult.monsterDamage = 6;

        return battleResult;
    }
}

class BattleResult
{
    playerDamage;
    monsterDamage;
}