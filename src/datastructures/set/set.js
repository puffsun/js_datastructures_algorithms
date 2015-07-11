"use strict";

// We call it MySet because in ES2015, there is a native Set.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function MySet() {
    this.items = {};
}

MySet.prototype.size = function() {
    return Object.keys(this.items).length;
};

MySet.prototype.empty = function() {
    return Object.keys(this.items).length === 0;
};

MySet.prototype.add = function(value) {
    if (!this.has(value)) {
        this.items[value] = value;
        return true;
    }
    return false;
};

MySet.prototype.has = function(value) {
    return this.items.hasOwnProperty(value);
};

MySet.prototype.remove = function(value) {
    if (this.has(value)) {
        delete this.items[value];
        return true;
    }
    return false;
};

MySet.prototype.clear = function() {
    this.items = {};
};

MySet.prototype.values = function() {
    return Object.keys(this.items);
};

module.exports = MySet;
