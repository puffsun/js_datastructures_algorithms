"use strict";

function BinarySearchTree() {
    this.root = null;
}

/**
 * key : the key of the node
 * num : number of the children of the node
 */
function Node(key, num) {
    this.key = key;
    this.left = this.right = null;
    this.num = num;
}

function sizeOfNode(node) {
    if (node === null) {
        return 0;
    }
    return node.num;
}

function insertNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
    node.num = 1 + sizeOfNode(node.left) + sizeOfNode(node.right);
}

function searchNode(node, key) {
    if (node === null) {
        return false;
    }

    if (key < node.key) {
        return searchNode(node.left, key);
    } else if (key > node.key) {
        return searchNode(node.right, key);
    } else {
        return true;
    }
}

function removeNode(node, key) {
    if (node === null) {
        return null;
    }

    if (key < node.key) {
        node.left = removeNode(node.left, key);
    } else if (key > node.key) {
        node.right = removeNode(node.right, key);
    } else {
        if (node.left === null && node.rith === null) {
            node = null;
            return node;
        }

        if (node.left === null) {
            return node.right;
        } else if (node.right === null) {
            return node.left;
        }

        var aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
    }

    node.num = sizeOfNode(node.left) + sizeOfNode(node.right) + 1;
    return node;
}

function findMinNode(node) {
    while (node && node.left !== null) {
        node = node.left;
    }
    return node;
}

BinarySearchTree.prototype.size = function() {
    return sizeOfNode(this.root);
};

BinarySearchTree.prototype.empty = function() {
    return this.size() === 0;
};

BinarySearchTree.prototype.insert = function(key) {
    var node = new Node(key, 1);
    if (this.root === null) {
        this.root = node;
        this.root.num = 1;
    } else {
        insertNode(this.root, node);
    }
};

BinarySearchTree.prototype.search = function(key) {
    return searchNode(this.root, key);
};

BinarySearchTree.prototype.inOrderTraverse = function() {};

BinarySearchTree.prototype.preOrderTraverse = function() {};

BinarySearchTree.prototype.postOrderTraverse = function() {};

BinarySearchTree.prototype.min = function() {};

BinarySearchTree.prototype.max = function() {};

BinarySearchTree.prototype.remove = function(key) {
    this.root = removeNode(this.root, key);
};

BinarySearchTree.prototype.height = function() {};

BinarySearchTree.prototype.isBST = function() {};

module.exports = BinarySearchTree;
