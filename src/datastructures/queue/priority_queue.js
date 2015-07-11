"use strict";

var Queue = require("./queue");

function inherit(C, P) {
    var F = function() {};
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
}

function PriorityQueue() {
    this.items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        var qe = new QueueElement(element, priority);
        if (this.empty()) {
            this.items.push(qe);
        } else {
            var added = false;
            for (var i = 0; i < this.items.length; i += 1) {
                if (qe.priority > this.items[i].priority) {
                    this.items.splice(i, 0, qe);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.items.push(qe);
            }
        }
        console.log(this.items);
    };
}

inherit(PriorityQueue, Queue);

module.exports = PriorityQueue;
