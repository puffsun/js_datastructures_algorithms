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
});
