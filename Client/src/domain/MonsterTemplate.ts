import Monster from "./Monster";

export default class MonsterTemplate
{
    monsters: Array<Monster>;
    
    constructor(public name: string){
        this.monsters = [];
    };

    addMonster(newMonster){
        this.monsters.push(newMonster);
    }

    remove(existingMonster){
        this.monsters.remove(existingMonster);
    }
}