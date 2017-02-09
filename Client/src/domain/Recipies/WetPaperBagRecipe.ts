import { MonsterRecipe } from "./MonsterRecipe";
import Rarity from "../Enums/Rarity";
import Dice from "../../helpers/Dice";

export class WetPaperBagRecipe implements MonsterRecipe {
    name: string = "Wet Paper Bag";

    baseHealth: number = 2;
    baseStrength: number = 8;
    baseToughness: number = 8;
    baseDexterity: number = 8;
    
    healthPerLevel = () => Dice.rollSides(4);

    strengthPerLevel = () => Dice.binaryChance(10 + (this.rarity * 10));

    toughnessPerLevel = () => Dice.binaryChance(10 + (this.rarity * 10));

    dexterityPerLevel = () => Dice.binaryChance(10 + (this.rarity * 10));

    rarity: Rarity = Rarity.Common;
    level: number = 1;
}