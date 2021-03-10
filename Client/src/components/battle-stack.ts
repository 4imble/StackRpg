import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/monster';
import MonsterFactory from '../factories/MonsterFactory';
import Combat from '../helpers/Combat';
import { TemplateSpawned, Heartbeat, MonsterKilled } from '../messages';

@autoinject
export class BattleStack {
    stack: Array<Monster> = [];

    constructor(private eventAggregator: EventAggregator, private monsterFactory: MonsterFactory, private combat: Combat) {
        
        this.eventAggregator.subscribe(TemplateSpawned, (msg: TemplateSpawned) => {
            msg.template.recipes.forEach(recipe => {
                this.stack.push(monsterFactory.buildMonster(recipe));
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