abstract class Loot {
    constructor() {}

    template: string;
    abstract get displayName();
    abstract showToolTip();
    abstract moveToInventory();
    abstract use();
}

export default Loot;