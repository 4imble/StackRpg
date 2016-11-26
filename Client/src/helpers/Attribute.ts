export default class Attribute {
    constructor() {  }
    
    static getModifier(value: number) : number {
        return Math.floor((value - 10) / 2);
    }
}