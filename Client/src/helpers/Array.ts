interface Array<T> {
   remove(itemToRemove: T): Array<T>;
}

(<any>Array.prototype).remove = function (itemToRemove) {
    const index = this.indexOf(itemToRemove);
    if (index !== -1) {
        this.splice(index, 1);
    }
    return this;
}