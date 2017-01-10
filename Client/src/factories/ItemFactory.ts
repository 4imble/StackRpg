import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import * as Item from '../domain/AllItems';
import Monster from '../domain/Monster';
import Dice from "../helpers/Dice";

@autoinject
export default class ItemFactory {
    constructor(private eventAggregator: EventAggregator) { }

    buildGold(): Item.Gold {
        let newGold = new Item.Gold(this.eventAggregator);
        newGold.value = Dice.d20();
        newGold.template = "gold";
        return newGold;
    }

    buildWeapon(name: string): Item.Weapon {
        let newWeapon = new Item.Weapon(this.eventAggregator);
        newWeapon.name = name;
        newWeapon.damage = Dice.d20();
        newWeapon.template = "weapon";
        return newWeapon;
    }
}
