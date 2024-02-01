"use strict";

const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");

module.exports = class Cart {

    //region private attributes
    _items = [];
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
        for (let item of this.items)
            total += item.total;

        return total;
    }

    count(checkQuantity = false) {
        if (checkQuantity)
            return this.items.length;

        let total = 0;
        for (let item of this.items)
            total += item.quantity;

        return total;
    }

    add(items) {
        if(!items)
            throw new UpdateCartException();

        if (!this._items)
            this.items = [];

        this._items.push(...items);
    }

    //region private methods
    //endregion private methods
}



