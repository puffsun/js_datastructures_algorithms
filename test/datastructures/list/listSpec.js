"use strict";

var LinkedList = require("../../../src/datastructures/list/list"),
    chai = require("chai"),
    expect = chai.expect;

chai.config.includeStack = true;

describe("Test Linked List", function() {
    var list;

    beforeEach(function() {
        list = new LinkedList();
    });

    it("should be empty with newly created linked list", function() {
        expect(list.empty()).to.equal(true);
        expect(list.size()).to.equal(0);
        expect(list.getHead()).to.equal(null);
    });

    it("should not empty after appending elements", function() {
        list.append("a");
        expect(list.empty()).to.equal(false);
        expect(list.size()).to.equal(1);
        expect(list.toString()).to.equal("a");
        expect(list.getHead().element).to.equal("a");

        list.append("b");
        expect(list.size()).to.equal(2);
        expect(list.toString()).to.equal("a->b");
        expect(list.getHead().element).to.equal("a");

        expect(list.indexOf("a")).to.equal(0);
        expect(list.indexOf("b")).to.equal(1);
        expect(list.indexOf("c")).to.equal(-1);
    });

    it("should not empty after inserting elements", function() {
        var result = list.insert(1, "a");
        expect(result).to.equal(false);
        expect(list.empty()).to.equal(true);
        expect(list.size()).to.equal(0);
        expect(list.toString()).to.equal("");

        result = list.insert(0, "a");
        expect(result).to.equal(true);
        expect(list.empty()).to.equal(false);
        expect(list.size()).to.equal(1);
        expect(list.toString()).to.equal("a");
        expect(list.getHead().element).to.equal("a");

        result = list.insert(1, "b");
        expect(result).to.equal(true);
        expect(list.size()).to.equal(2);
        expect(list.toString()).to.equal("a->b");

        result = list.insert(0, "c");
        expect(result).to.equal(true);
        expect(list.size()).to.equal(3);
        expect(list.toString()).to.equal("c->a->b");
        expect(list.getHead().element).to.equal("c");
    });

    it("should remove element from list", function() {
        var element = list.removeAt(0);
        expect(element).to.equal(null);

        expect(list.removeAt(1)).to.equal(null);

        list.append("a");
        list.append("b");
        list.append("c");
        list.append("d");
        expect(list.toString()).to.equal("a->b->c->d");
        expect(list.size()).to.equal(4);

        element = list.removeAt(0);
        expect(element).to.equal("a");
        expect(list.size()).to.equal(3);
        expect(list.toString()).to.equal("b->c->d");

        element = list.removeAt(1);
        expect(element).to.equal("c");
        expect(list.size()).to.equal(2);
        expect(list.toString()).to.equal("b->d");

        element = list.remove("d");
        expect(element).to.equal("d");
        expect(list.size()).to.equal(1);
        expect(list.toString()).to.equal("b");

        element = list.remove("d");
        expect(element).to.equal(null);
        expect(list.size()).to.equal(1);
        expect(list.toString()).to.equal("b");

        element = list.remove("b");
        expect(element).to.equal("b");
        expect(list.size()).to.equal(0);
        expect(list.toString()).to.equal("");

        element = list.remove("b");
        expect(element).to.equal(null);
        expect(list.size()).to.equal(0);
        expect(list.toString()).to.equal("");
    });
});
