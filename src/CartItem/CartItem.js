"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    _articleId;
    _name;
    _quantity;
    _price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {

        if (articleId < 1)
            throw new InvalidArticleIdException();
        if (quantity < 1)
            throw new InvalidQuantityException();
        if (price < 10)
            throw new InvalidPriceException();

        this._articleId = articleId;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }

    get articleId() {
        return this._articleId;
    }

    get name() {
        return this._name;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get total() {
        return this._quantity * this._price;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



