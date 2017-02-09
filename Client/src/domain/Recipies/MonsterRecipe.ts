import Rarity from "../Enums/Rarity";

export interface MonsterRecipe
{ 
    name: string;

    baseHealth: number;
    baseStrength: number;
    baseToughness: number;
    baseDexterity: number;

    healthPerLevel: () => number;
    strengthPerLevel: () => number;
    toughnessPerLevel: () => number;
    dexterityPerLevel: () => number;

    rarity: Rarity;
    level: number;
}