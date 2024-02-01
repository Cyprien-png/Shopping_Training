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
        return this._items;
    }

    set items(value) {
        this._items = value;
    }

    //region private methods
    //endregion private methods
}



