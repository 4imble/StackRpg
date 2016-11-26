import {Loot} from "./Loot";
import Dice from "../../helpers/Dice";
import { ItemTaken } from '../../messages';

export class Weapon extends Loot {
    damage: number = Dice.d20();

    constructor(public name: string) {
        super();
        this.template = "weapon";
    }

    get displayName() {
        return this.name;
    }

    showToolTip() { };
    take() { return new ItemTaken(this) };
    use() {};
}