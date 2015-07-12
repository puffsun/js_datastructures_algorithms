"use strict";

var ValuePair = require("./value_pair");

function hashCode(key) {
    var hash = 5381,
        i, len;

    for (i = 0, len = key.length; i < len; i++) {
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
}

function Hash() {
    this.length = 0;
    this.table = [];
}

Hash.prototype.size = function() {
    return this.length;
};

Hash.prototype.put = function(key, value) {
    var position = hashCode(key),
        node = new ValuePair(key, value);
    if (this.table[position] === undefined) {
        this.table[position] = node;
    } else {
        var index = position++;
        while (this.table[index] !== undefined) {
            if (this.table[index].keyEquals(node)) {
                this.table[index] = node;
                // replace with increase the size
                return;
            }
            index += 1;
        }
        this.table[index] = node;
    }
    this.length += 1;
};

Hash.prototype.get = function(key) {
    var position = hashCode(key),
        index;

    if (this.table[position] === undefined) {
        return undefined;
    }

    if (this.table[position].key === key) {
        return this.table[position].value;
    } else {
        index = ++position;
        while (this.table[index] === undefined) {
            if (this.table[index].key === key) {
                return this.table[index].value;
            }
            index += 1;
        }
        return undefined;
    }
};

Hash.prototype.remove = function(key) {
    var position = hashCode(key),
        index;

    if (this.table[position] === undefined) {
        return false;
    }

    if (this.table[position].key === key) {
        this.table[position] = undefined;
        this.length -= 1;
        return true;
    } else {
        index = ++position;
        while (this.table[index] === undefined) {
            if (this.table[index].key === key) {
                this.table[index] = undefined;
                this.length -= 1;
                return true;
            }
            index += 1;
        }
        return false;
    }
};

module.exports = Hash;
