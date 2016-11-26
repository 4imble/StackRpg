import Loot from "./Loot";
import Dice from "../../helpers/Dice";

export default class Gold extends Loot {
    value: number;

    constructor() {
        super();
        this.value = Dice.d20();
        this.template = "gold";
    }

    get displayName() {
        return `Gold Bag (${this.value})`;
    }

    showToolTip() { alert(`Showing ${this.displayName}.`) };
    moveToInventory() { };
    use() {};
}