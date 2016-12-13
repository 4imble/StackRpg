import Monster from "./Monster";

export default class MonsterTemplate
{
    monsters: Array<Monster>;
    
    constructor(public name: string){
        this.monsters = [];
    };

    addMonster(newMonster: Monster){
        this.monsters.push(newMonster);
    }

    remove(existingMonster: Monster){
        this.monsters.remove(existingMonster);
    }
}