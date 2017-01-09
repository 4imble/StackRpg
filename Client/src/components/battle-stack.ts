import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/Monster';
import BodyFactory from '../factories/BodyFactory';
import { TemplateSpawned, Heartbeat, MonsterKilled } from '../messages';

@autoinject
export class BattleStack {
    stack: Array<Monster> = [];

    constructor(private eventAggregator: EventAggregator, private bodyFactory: BodyFactory) {
        this.stack.push(bodyFactory.buildMonster("Grumble"), bodyFactory.buildMonster("Viqas' Expensive Bread"));

        this.eventAggregator.subscribe(TemplateSpawned, (msg: TemplateSpawned) => {
            msg.template.monsters.forEach(monster => {
                this.stack.push(monster);
            });
        });

        this.eventAggregator.subscribe(Heartbeat, () => {
            if (this.stack.length) {
                this.fightMonster();
            }
        });
    }

    fightMonster() {
        let monster = this.stack.shift();
        this.eventAggregator.publish(new MonsterKilled(monster));
    }

    created() { }
}