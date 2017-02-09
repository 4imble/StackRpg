import Monster from "./domain/monster";
import MonsterTemplate from "./domain/MonsterTemplate";
import * as Item from "./domain/AllItems";
import * as Recipes from "./domain/AllRecipies";

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

export class RecipeTaken {
    constructor(public recipe: Recipes.MonsterRecipe) { }
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