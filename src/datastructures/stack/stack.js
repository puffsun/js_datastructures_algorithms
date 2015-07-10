"use strict";

function Stack() {
    this.items = [];
}

Stack.prototype.empty = function() {
    return this.items.length  === 0;
};

Stack.prototype.size = function() {
    return this.items.length;
};

Stack.prototype.push = function(e) {
    this.items.push(e);
};

Stack.prototype.pop = function() {
    this.items.pop();
};

Stack.prototype.peek = function() {
    return this.items[this.items.length - 1];
};

module.exports = Stack;
