import Loot from "./Loot";
import Dice from "../../helpers/Dice";

export default class Weapon extends Loot {
    damage: number = Dice.d20();

    constructor(public name: string) {
        super();
        this.template = "weapon";
    }

    get displayName() {
        return this.name;
    }

    showToolTip() { alert(`Showing ${this.displayName}`) };
    moveToInventory() {};
    use() {};
}