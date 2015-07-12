"use strict";

function ValuePair(key, value) {
    this.key = key;
    this.value = value;

    this.toString = function() {
        return '[' + this.key + ' - ' + this.value + ']';
    };

    this.keyEquals = function(other) {
        return other.key === this.key;
    };
}

module.exports = ValuePair;
