"use strict";

const EmptyCartException = require("./EmptyCartException.js");

module.exports = class Cart {

    //region private attributes
    _items;
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.items = items;
    }

    //endregion public methods
    get items() {
        if (!this._items)
            throw new EmptyCartException();

        return this._items;
    }

    set items(value) {
      this._items = value;
    }

    get total() {
        let total = 0;
        for(let item of this.items)
            total += item.total;

        return total;
    }

    count() {
        let total = 0;
        for(let item of this.items)
            total += item.quantity;

        return total;
    }

    //region private methods
    //endregion private methods
}



