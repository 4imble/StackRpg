import { autoinject } from 'aurelia-framework';
import Player from "../Player";
import * as Item from "../AllItems";
import BodyFactory from "../../factories/BodyFactory"

@autoinject
export default class PlayerStore
{
    currentPlayer: Player;
    inventory: Array<Item.Loot> = [];
    
    constructor(bodyFactory: BodyFactory) {
        this.currentPlayer = bodyFactory.buildPlayer("Test Factory Player");
    }
}