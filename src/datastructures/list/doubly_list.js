"use strict";

function Node(element) {
    this.element = element;
    this.next = this.prev = null;
}

function DoublyLinkedList() {
    this.length = 0;
    this.head = this.tail = null;
}

DoublyLinkedList.prototype.empty = function() {
    return this.length === 0;
};

DoublyLinkedList.prototype.size = function() {
    return this.length;
};

DoublyLinkedList.prototype.getHead = function() {
    return this.head;
};

DoublyLinkedList.prototype.getTail = function() {
    return this.tail;
};

DoublyLinkedList.prototype.insertAt = function(position, element) {
    if (position < 0 || position > this.length) {
        return false;
    }

    var node = new Node(element),
        currentNode = this.head,
        index = 0,
        prevNode;

    if (position === 0) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = currentNode;
            currentNode.prev = node;
            this.head = node;
        }
    } else if (position === this.length) {
        currentNode = this.tail;
        currentNode.next = node;
        node.prev = currentNode;
        this.tail = node;
    } else {
        while (index++ < position) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        prevNode.next = node;

        currentNode.prev = node;
        node.prev = prevNode;
    }

    this.length += 1;
    return true;
};

DoublyLinkedList.prototype.removeAt = function(position) {
    if (position < 0 || position >= this.length) {
        return null;
    }

    var currentNode = this.head,
        index = 0,
        prevNode;

    if (position === 0) {
        this.head = currentNode.next;
        if (this.length === 1) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }
    } else if (position === this.length - 1) {
        currentNode = this.tail;
        this.tail = currentNode.prev;
        this.tail.next = null;
    } else {
        while (index++ < position) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = currentNode.next;
        currentNode.prev = prevNode;
    }

    this.length -= 1;
    return currentNode.element;
};

DoublyLinkedList.prototype.toString = function() {
    var currentNode = this.head,
        outputBuf = '';

    while (currentNode) {
        outputBuf += String(currentNode.element);
        if (currentNode.next) {
            outputBuf += "<->";
        }
        currentNode = currentNode.next;
    }

    return outputBuf;
};

module.exports = DoublyLinkedList;
