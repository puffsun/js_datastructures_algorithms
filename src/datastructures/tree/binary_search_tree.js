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

BinarySearchTree.prototype.size = function() {
    return sizeOfNode(this.root);
};

BinarySearchTree.prototype.empty = function() {
    return this.size() === 0;
};

BinarySearchTree.prototype.insert = function(key) {};

BinarySearchTree.prototype.search = function(key) {};

BinarySearchTree.prototype.inOrderTraverse = function() {};

BinarySearchTree.prototype.preOrderTraverse = function() {};

BinarySearchTree.prototype.postOrderTraverse = function() {};

BinarySearchTree.prototype.min = function() {};

BinarySearchTree.prototype.max = function() {};

BinarySearchTree.prototype.remove = function(key) {};

BinarySearchTree.prototype.height = function() {};

BinarySearchTree.prototype.isBST = function() {};

module.exports = BinarySearchTree;
