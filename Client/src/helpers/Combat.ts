import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Player from '../Domain/Player';
import PlayerStore from '../domain/Stores/PlayerStore';
import Monster from '../Domain/Monster';
import Body from '../Domain/Body';
import Dice from "../helpers/Dice";
import Attribute from "../helpers/Attribute";
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
        
        monsters.forEach(monster => {
            battleResult.playerDamage += this.calculateDamage(player, monster);        
        });
        
        battleResult.monsterDamage = this.calculateDamage(monsters[0], player);

        return battleResult;
    }

    private calculateDamage(defender: Body, attacker: Body): number {
        let defenderDodge = Attribute.getModifier(defender.dexterity) + Dice.d20();
        if(defenderDodge >= attacker.baseAttack + Dice.d20())
            {
                console.log(attacker.name + "Misses");
                return 0;
            }

        let attackerDamage = Attribute.getModifier(attacker.strength) + Dice.d6();
        console.log(attacker.name + "Hits - " + attackerDamage);        
        return attackerDamage;
    }
}

class BattleResult
{
    playerDamage = 0;
    monsterDamage = 0;
}