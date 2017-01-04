import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import Monster from '../domain/Monster';
import { TemplateSpawned, Heartbeat, MonsterKilled } from '../messages';

@inject(EventAggregator)
export class BattleStack {
    stack: Array<Monster> = [new Monster("Grumble"), new Monster("Terrible Ade"), new Monster("Viqas's Bread"), new Monster("Viqas's Bread")];

    constructor(private eventAggregator: EventAggregator) {
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

    created() {

    }
}