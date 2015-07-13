"use strict";

var BinarySearchTree = require("../../../src/datastructures/tree/binary_search_tree"),
    expect = require("chai").expect;

describe("Test Binary Search Tree", function() {
    var bst;

    beforeEach(function() {
        bst = new BinarySearchTree();
    });

    it("should be empty with newly created tree", function() {
        expect(bst.size()).to.equal(0);
        expect(bst.empty()).to.equal(true);
    });

    it("should not be empty with elements added", function() {
        bst.insert("a");
        expect(bst.size()).to.equal(1);
        expect(bst.empty()).to.equal(false);

        bst.insert("b");
        expect(bst.size()).to.equal(2);
        expect(bst.empty()).to.equal(false);

        bst.insert("b");
        expect(bst.size()).to.equal(3);
        expect(bst.empty()).to.equal(false);
    });

    it("should contains the elements been added", function() {
        bst.insert("a");
        bst.insert("b");

        expect(bst.search("a")).to.equal(true);
        expect(bst.search("b")).to.equal(true);
        expect(bst.search("c")).to.equal(false);
    });

    it("should remove the specified element", function() {

        bst.insert("c");
        bst.insert("a");
        bst.insert("a");
        bst.insert("b");
        bst.insert("d");

        bst.remove("a");
        expect(bst.search("a")).to.equal(true);
        expect(bst.search("b")).to.equal(true);
        expect(bst.size()).to.equal(4);

        bst.remove("a");
        expect(bst.search("a")).to.equal(false);
        expect(bst.search("b")).to.equal(true);
        expect(bst.size()).to.equal(3);

        bst.remove("a");
        expect(bst.size()).to.equal(3);
        expect(bst.search("b")).to.equal(true);

        bst.remove("b");
        expect(bst.search("b")).to.equal(false);
        expect(bst.size()).to.equal(2);

        bst.remove("c");
        expect(bst.search("c")).to.equal(false);
        expect(bst.size()).to.equal(1);

        bst.remove("d");
        expect(bst.search("d")).to.equal(false);
        expect(bst.size()).to.equal(0);
    });

    it("should find the min/max node", function() {
        expect(bst.min()).to.equal(null);
        expect(bst.max()).to.equal(null);

        bst.insert("c");
        expect(bst.min()).to.equal("c");
        expect(bst.max()).to.equal("c");

        bst.insert("b");
        bst.insert("d");

        expect(bst.min()).to.equal("b");
        expect(bst.max()).to.equal("d");
    });

    it("should return height of the tree", function() {
        expect(bst.height()).to.equal(-1);

        bst.insert("c");
        // one node of tree has height of 1
        expect(bst.height()).to.equal(0);

        bst.insert("b");
        expect(bst.height()).to.equal(1);
        bst.insert("d");
        expect(bst.height()).to.equal(1);

        bst.insert("a");
        expect(bst.height()).to.equal(2);
        bst.insert("e");
        expect(bst.height()).to.equal(2);
    });

    it("should return if the given tree is BST", function() {
        expect(bst.isBST()).to.equal(true);

        bst.insert("c");
        expect(bst.isBST()).to.equal(true);

        bst.insert("b");
        expect(bst.isBST()).to.equal(true);

        bst.insert("d");
        expect(bst.isBST()).to.equal(true);
    });
});
