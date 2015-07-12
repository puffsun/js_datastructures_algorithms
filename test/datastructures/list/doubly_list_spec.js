"use strict";

var DoublyLinkedList = require("../../../src/datastructures/list/doubly_list"),
    expect = require("chai").expect;

describe("Test Doubly Linked List", function() {
    var dlist;

    beforeEach(function() {
        dlist = new DoublyLinkedList();
    });

    it("should be empty with newly create doubly linked list", function() {
        expect(dlist.empty()).to.equal(true);
        expect(dlist.size()).to.equal(0);
        expect(dlist.getHead()).to.equal(null);
        expect(dlist.getTail()).to.equal(null);
        expect(dlist.toString()).to.equal("");
    });

    it("should not be empty with new element been inserted", function() {
        var result = dlist.insertAt(-1, "a");
        expect(result).to.equal(false);
        expect(dlist.empty()).to.equal(true);
        expect(dlist.size()).to.equal(0);
        expect(dlist.getHead()).to.equal(null);
        expect(dlist.getTail()).to.equal(null);

        result = dlist.insertAt(1, "a");
        expect(result).to.equal(false);
        expect(dlist.empty()).to.equal(true);
        expect(dlist.size()).to.equal(0);
        expect(dlist.getHead()).to.equal(null);
        expect(dlist.getTail()).to.equal(null);

        result = dlist.insertAt(0, "a");
        expect(result).to.equal(true);
        expect(dlist.empty()).to.equal(false);
        expect(dlist.size()).to.equal(1);
        expect(dlist.getHead().element).to.equal("a");
        expect(dlist.getTail().element).to.equal("a");
        expect(dlist.toString()).to.equal("a");

        result = dlist.insertAt(1, "b");
        expect(result).to.equal(true);
        expect(dlist.empty()).to.equal(false);
        expect(dlist.size()).to.equal(2);
        expect(dlist.getHead().element).to.equal("a");
        expect(dlist.getTail().element).to.equal("b");
        expect(dlist.toString()).to.equal("a<->b");

        result = dlist.insertAt(1, "c");
        expect(result).to.equal(true);
        expect(dlist.empty()).to.equal(false);
        expect(dlist.size()).to.equal(3);
        expect(dlist.getHead().element).to.equal("a");
        expect(dlist.getTail().element).to.equal("b");
        expect(dlist.toString()).to.equal("a<->c<->b");
    });

    it("should remove element from doubly linked list", function() {
        var element = dlist.removeAt(0);
        expect(element).to.equal(null);

        dlist.insertAt(0, "a");
        dlist.insertAt(1, "b");
        dlist.insertAt(2, "c");
        dlist.insertAt(3, "d");
        dlist.insertAt(4, "e");
        expect(dlist.size()).to.equal(5);
        expect(dlist.toString()).to.equal("a<->b<->c<->d<->e");

        element = dlist.removeAt(-1);
        expect(dlist.size()).to.equal(5);
        expect(element).to.equal(null);

        element = dlist.removeAt(0);
        expect(dlist.size()).to.equal(4);
        expect(element).to.equal("a");
        expect(dlist.getHead().element).to.equal("b");
        expect(dlist.getTail().element).to.equal("e");
        expect(dlist.toString()).to.equal("b<->c<->d<->e");

        element = dlist.removeAt(dlist.size() - 1);
        expect(dlist.size()).to.equal(3);
        expect(element).to.equal("e");
        expect(dlist.getHead().element).to.equal("b");
        expect(dlist.getTail().element).to.equal("d");
        expect(dlist.toString()).to.equal("b<->c<->d");

        element = dlist.removeAt(1);
        expect(dlist.size()).to.equal(2);
        expect(element).to.equal("c");
        expect(dlist.getHead().element).to.equal("b");
        expect(dlist.getTail().element).to.equal("d");
        expect(dlist.toString()).to.equal("b<->d");
    });
});
