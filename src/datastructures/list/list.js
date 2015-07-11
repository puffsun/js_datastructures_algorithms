"use strict";

function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.length = 0;
    this.head = null;
}

LinkedList.prototype.empty = function() {
    return this.length === 0;
};

LinkedList.prototype.size = function() {
    return this.length;
};

LinkedList.prototype.append = function(element) {
    var node = new Node(element),
        currentNode;

    if (this.head === null) {
        this.head = node;
    } else {
        currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
    this.length += 1;
};

LinkedList.prototype.insert = function(position, element) {};
LinkedList.prototype.removeAt = function(position) {};
LinkedList.prototype.remove = function(element) {};
LinkedList.prototype.indexOf = function(element) {};

LinkedList.prototype.toString = function(element) {
    var tmpNode = this.head,
        outputBuf = '';

    while(tmpNode !== null) {
        outputBuf += String(tmpNode.element);
        if (tmpNode.next !== null) {
            outputBuf += "->";
        }
        tmpNode = tmpNode.next;
    }
    return outputBuf;
};

module.exports = LinkedList;
