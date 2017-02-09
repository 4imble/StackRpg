import { MonsterRecipe } from "./MonsterRecipe";
import Rarity from "../Enums/Rarity";
import Dice from "../../helpers/Dice";

export class DragonRecipe implements MonsterRecipe {
    name: string = "Dragon";

    baseHealth: number = 20;
    baseStrength: number = 16;
    baseToughness: number = 20;
    baseDexterity: number = 16;
    
    healthPerLevel = () => Dice.rollSides(10);

    strengthPerLevel = () => Dice.binaryChance(9 + (this.rarity * 12));

    toughnessPerLevel = () => Dice.binaryChance(10 + (this.rarity * 12));

    dexterityPerLevel = () => Dice.binaryChance(13 + (this.rarity * 12));

    rarity: Rarity = Rarity.Rare;
    level: number = 1;
}