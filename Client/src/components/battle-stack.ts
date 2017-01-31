import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/Monster';
import MonsterFactory from '../factories/MonsterFactory';
import Combat from '../helpers/Combat';
import { TemplateSpawned, Heartbeat, MonsterKilled } from '../messages';

@autoinject
export class BattleStack {
    stack: Array<Monster> = [];

    constructor(private eventAggregator: EventAggregator, private monsterFactory: MonsterFactory, private combat: Combat) {
        this.stack.push(monsterFactory.buildMonster("Grumble"), monsterFactory.buildMonster("Viqas' Expensive Bread"));

        this.eventAggregator.subscribe(TemplateSpawned, (msg: TemplateSpawned) => {
            msg.template.monsters.forEach(monster => {
                this.stack.push(monsterFactory.cloneMonster(monster));
            });
        });

        this.eventAggregator.subscribe(MonsterKilled, (msg: MonsterKilled) => {
            this.stack.remove(msg.monster);
        });

        this.eventAggregator.subscribe(Heartbeat, () => {
            if (this.stack.length) {
                this.fightMonster();
            }
        });
    }

    fightMonster() {
        this.combat.battle(this.stack);
    }

    created() { }
}