import Monster from "./domain/monster";
import MonsterTemplate from "./domain/MonsterTemplate";
import * as Item from "./domain/AllItems";

export class Heartbeat {
    constructor() { }
}

export class MonsterAdded {
    constructor(public monster: Monster) { }
}

export class MonsterKilled {
    constructor(public monster: Monster) { }
}

export class GoldTaken {
    constructor(public goldItem: Item.Gold) { }
}

export class ItemTaken {
    constructor(public item: Item.Loot) { }
}

export class ShowModalWindow {
    constructor(public id: string) { }
}

export class TemplateSpawned {
    constructor(public template: MonsterTemplate) { }
}