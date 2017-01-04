import Player from "../Player";
import * as Item from "../AllItems";

export default class PlayerStore
{
    currentPlayer: Player;
    inventory: Array<Item.Loot> = [];
    
    constructor() {
        this.currentPlayer = new Player("Test Player")
    }
}