import { MonsterRecipe } from "./MonsterRecipe";
import Rarity from "../Enums/Rarity";
import Dice from "../../helpers/Dice";

export class KoboldRecipe implements MonsterRecipe {
    name: string = "Kobold";

    baseHealth: number = 4;
    baseStrength: number = 9;
    baseToughness: number = 10;
    baseDexterity: number = 13;
    
    healthPerLevel = () => Dice.rollSides(4);

    strengthPerLevel = () => Dice.binaryChance(9 + (this.rarity * 10));

    toughnessPerLevel = () => Dice.binaryChance(10 + (this.rarity * 10));

    dexterityPerLevel = () => Dice.binaryChance(13 + (this.rarity * 10));

    rarity: Rarity = Rarity.Common;
}