/// <reference path="stack.js">
"use strict";

var Stack = require("../../../src/datastructures/stack/stack"),
    expect = require("chai").expect;

describe("Test Stack", function() {
    var stack;
    beforeEach(function() {
        stack = new Stack();
    });
    it("should be empty for a newly created Stack", function() {
        expect(stack.empty()).to.equal(true);
        expect(stack.size()).to.equal(0);
        expect(stack.peek()).to.equal(undefined);
    });

    it("should not empty with elements", function() {
        stack.push("a");
        expect(stack.empty()).to.equal(false);
        expect(stack.size()).to.equal(1);
        expect(stack.peek()).to.equal("a");

        var e = stack.pop();
        expect(e).to.equal("a");
        expect(stack.empty()).to.equal(true);
        expect(stack.size()).to.equal(0);
        expect(stack.peek()).to.equal(undefined);
    });

    it("should be FILO as expected", function() {
        stack.push("A");
        stack.push("B");
        stack.push("C");
        expect(stack.size()).to.equal(3);
        expect(stack.pop()).to.equal("C");
        expect(stack.pop()).to.equal("B");
        expect(stack.pop()).to.equal("A");
    });
});

