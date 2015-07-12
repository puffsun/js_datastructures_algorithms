"use strict";

var LinkedList = require("../list/list"),
    ValuePair = require("./value_pair");

function Hash() {
    this.table = [];
    this.length = 0;
}

function findNodeIndexInList(list, node) {
    if (node === null || node === undefined ||
        list === null || list === undefined) {
        return -1;
    }

    var listNode = list.getHead(),
        index = 0;
    if (listNode) {
        if (listNode.element.keyEquals(node)) {
            return index;
        }
        index += 1;
        listNode = listNode.next;
    }
    return -1;
}

function hashCode(key) {
    var hash = 5381,
        i, len;

    for (i = 0, len = key.length; i < len; i++) {
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
}

Hash.prototype.size = function() {
    return this.length;
};

Hash.prototype.put = function(key, value) {
    var position = hashCode(key);
    if (this.table[position] === undefined) {
        this.table[position] = new LinkedList();
    }

    var node = new ValuePair(key, value),
        index = findNodeIndexInList(this.table[position], node);
    if (index === -1) {
        this.table[position].append(node);
        this.length += 1;
    } else {
        this.table[position].insert(index, node);
    }
};

Hash.prototype.get = function(key) {
    var position = hashCode(key);
    if (this.table[position] === undefined) {
        return undefined;
    }

    var current = this.table[position].getHead();
    if (!current) {
        return undefined;
    }
    while (current.next) {
        if (current.element.key === key) {
            return current.element.value;
        }
        current = current.next;
    }

    // check in case first or last element
    if (current.element.key === key) {
        return current.element.value;
    }
    return undefined;
};

Hash.prototype.remove = function(key) {
    var position = hashCode(key);

    if (this.table[position] === undefined) {
        return false;
    }

    var node = new ValuePair(key, undefined),
        index = findNodeIndexInList(this.table[position], node);
    if (index === -1) {
        return false;
    } else {
        this.table[position].removeAt(index);
        this.length -= 1;
        return true;
    }
};

module.exports = Hash;
