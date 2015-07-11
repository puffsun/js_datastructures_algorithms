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

LinkedList.prototype.insert = function(position, element) {
    if (position < 0 || position > this.length) {
        return false;
    }

    var node = new Node(element),
        currentNode = this.head,
        prevNode,
        index = 0;

    if (position === 0) {
        node.next = currentNode;
        this.head = node;
    } else {
        while (index++ < position) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        prevNode.next = node;
    }

    this.length += 1;
    return true;
};

LinkedList.prototype.removeAt = function(position) {
    if (position >= this.length) {
        return null;
    }

    var currentNode = this.head,
        prevNode,
        index = 0;

    if (position === 0) {
        this.head = this.head.next;
    } else {
        while (index++ < position) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = currentNode.next;
    }

    this.length -= 1;
    return currentNode.element;
};

LinkedList.prototype.remove = function(element) {
    var index = this.indexOf(element);
    if (index >= 0) {
        return this.removeAt(index);
    }
    return null;
};

LinkedList.prototype.indexOf = function(element) {
    var index = 0,
        currentNode = this.head;

    while (currentNode) {
        if (element === currentNode.element) {
            return index;
        }
        index += 1;
        currentNode = currentNode.next;
    }
    return -1;
};

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
