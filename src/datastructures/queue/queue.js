"use strict";

function Queue() {
    this.items = [];
}

Queue.prototype.enqueue = function(e) {
    this.items.push(e);
};

Queue.prototype.dequeue = function() {
    return this.items.shift();
};

Queue.prototype.empty = function() {
    return this.items.length === 0;
};

Queue.prototype.size = function() {
    return this.items.length;
};

Queue.prototype.front = function() {
    return this.items[0];
};

Queue.prototype.clear = function() {
    this.items = [];
};

module.exports = Queue;
