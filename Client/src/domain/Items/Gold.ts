import {Loot} from "./Loot";
import Dice from "../../helpers/Dice";
import { GoldTaken } from '../../messages';


export class Gold extends Loot {
    value: number;

    constructor() {
        super();
        this.value = Dice.d20();
        this.template = "gold";
    }

    get displayName() {
        return `Gold Bag (${this.value})`;
    }

    showToolTip() { };
    take() { return new GoldTaken(this) };
    use() {};
}