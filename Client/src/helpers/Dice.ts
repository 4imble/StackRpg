export default class Dice {
    constructor() {  }
    
    static d6()
    {
        return this.rollSides(6);
    }
    
    static d20()
    {
        return this.rollSides(20);
    }

    static rollSides(sides){
        return Math.floor(Math.random() * sides) + 1;
    }
}