"use strict";

var LinkedList = require("../../../src/datastructures/list/list"),
    expect = require("chai").expect;

describe("Test Linked List", function() {
    var list;

    beforeEach(function() {
        list = new LinkedList();
    });

    it("should be empty with newly created linked list", function() {
        expect(list.empty()).to.equal(true);
        expect(list.size()).to.equal(0);
    });

    it("should not empty after appending elements", function() {
        list.append("a");
        expect(list.empty()).to.equal(false);
        expect(list.size()).to.equal(1);
        expect(list.toString()).to.equal("a");

        list.append("b");
        expect(list.size()).to.equal(2);
        expect(list.toString()).to.equal("a->b");
    });
});
