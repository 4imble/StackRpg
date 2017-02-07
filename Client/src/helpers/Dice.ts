export default class Dice {
    constructor() {  }
    
    static d6() : number
    {
        return this.rollSides(6);
    }
    
    static d20() : number
    {
        return this.rollSides(20);
    }

    static rollSides(sides: number) : number
    {
        return Math.floor(Math.random() * sides) + 1;
    }

    static binaryChance(percent: number) : number
    {
        return Dice.rollSides(100) <= percent ? 1 : 0;
    }
}