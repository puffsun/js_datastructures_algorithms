/// <reference path="stack.js">
"use strict";

var Stack = require("../../../src/datastructures/stack/stack"),
    expect = require("chai").expect;

describe("Stack tests", function() {
    it("should be empty for a newly created Stack", function() {
        var s1 = new Stack();
        expect(s1.empty()).to.equal(true);
        expect(s1.size()).to.equal(0);
        expect(s1.peek()).to.equal(undefined);
    });

    it("should not empty with elements", function() {
        var s1 = new Stack();
        s1.push("a");
        expect(s1.empty()).to.equal(false);
        expect(s1.size()).to.equal(1);
        expect(s1.peek()).to.equal("a");

        var e = s1.pop();
        expect(e).to.equal("a");
        expect(s1.empty()).to.equal(true);
        expect(s1.size()).to.equal(0);
        expect(s1.peek()).to.equal(undefined);
    });
});

