export default class Experience {
    static power: number = 2.1;
    static xpmod: number = 500;

    constructor() {
    }

    static getLevel(experience: number): number {
        var root = 1 / Experience.power;

        return Math.floor(Math.pow(experience / Experience.xpmod, root)) + 1
    }

    static getXpForLevel(level: number): number {
        return Math.ceil(Math.pow(level -1, Experience.power) * Experience.xpmod)
    }
}