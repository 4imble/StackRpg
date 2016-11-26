import Monster from "./domain/monster";
//import { GoldItem } from "./domain/GoldItem";

export class Heartbeat {
    constructor() { }
}

export class MonsterAdded {
    constructor(public monster: Monster) { }
}

export class MonsterKilled {
    constructor(public monster: Monster) { }
}

export class ItemTaken {
    //constructor(public goldItem: GoldItem) { }
}

export class ShowModalWindow {
    constructor(public id: string) { }
}