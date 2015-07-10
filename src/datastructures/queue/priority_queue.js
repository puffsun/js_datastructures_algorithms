"use strict";

var Queue = require("./queue");

function PriorityQueue() {
}

PriorityQueue.prototype = new Queue();

module.exports = PriorityQueue;
