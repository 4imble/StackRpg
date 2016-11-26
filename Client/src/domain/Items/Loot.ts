export abstract class Loot {
    constructor() {}

    template: string;
    abstract get displayName();
    abstract showToolTip();
    abstract take();
    abstract use();
}