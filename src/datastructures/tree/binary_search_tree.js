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

function minNode(node) {
    if (!node) {
        return null;
    }

    while (node && node.left !== null) {
        node = node.left;
    }
    return node.key;
}

function maxNode(node) {
    if (!node) {
        return null;
    }

    while (node && node.right !== null) {
        node = node.right;
    }
    return node.key;
}

function nodeHeight(node) {
    if (node === null) {
        return -1;
    }
    return 1 + Math.max(nodeHeight(node.left), nodeHeight(node.right));
}



// is the tree rooted at x a BST with all keys strictly
// between min and max
// (if min or max is null, treat as empty constraint)
// Credit: Bob Dondero's elegant solution
function isBinarySearchTree(node, min, max) {
    if (node === null) {
        return true;
    }

    if (min !== null && node.key < min) {
        return false;
    }

    if (max !== null && node.key > max) {
        return false;
    }

    return isBinarySearchTree(node.left, min, node.key) &&
        isBinarySearchTree(node.right, node.key, max);
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

BinarySearchTree.prototype.min = function() {
    return minNode(this.root);
};

BinarySearchTree.prototype.max = function() {
    return maxNode(this.root);
};

BinarySearchTree.prototype.remove = function(key) {
    this.root = removeNode(this.root, key);
};

BinarySearchTree.prototype.height = function() {
    return nodeHeight(this.root);
};


// does this binary tree satisfy symmetric order?
// Note: this test also ensures that data structure is
// a binary tree since order is strict
BinarySearchTree.prototype.isBST = function() {
    return isBinarySearchTree(this.root, null, null);
};

module.exports = BinarySearchTree;
