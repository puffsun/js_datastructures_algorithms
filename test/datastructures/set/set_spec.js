"use strict";

var MySet = require("../../../src/datastructures/set/set"),
    expect = require("chai").expect;

describe("Test MySet", function() {
    var set;

    beforeEach(function() {
        set = new MySet();
    });

    it("should be empty with newly created set", function() {
        expect(set.size()).to.equal(0);
        expect(set.empty()).to.equal(true);
    });

    it("should not be empty after adding elements", function() {
        var result = set.add("a");
        expect(result).to.equal(true);
        expect(set.size()).to.equal(1);
        expect(set.empty()).to.equal(false);
        expect(set.has("a")).to.equal(true);

        result = set.add("a");
        expect(result).to.equal(false);
        expect(set.size()).to.equal(1);
        expect(set.empty()).to.equal(false);

        result = set.add("b");
        expect(result).to.equal(true);
        expect(set.size()).to.equal(2);
        expect(set.empty()).to.equal(false);
    });

    it("should remove elements accordingly", function() {
        set.add("a");
        set.add("b");

        var result = set.remove("a");
        expect(result).to.equal(true);
        expect(set.size()).to.equal(1);

        result = set.remove("a");
        expect(result).to.equal(false);
        expect(set.size()).to.equal(1);

        result = set.remove("b");
        expect(result).to.equal(true);
        expect(set.size()).to.equal(0);

        result = set.remove("b");
        expect(result).to.equal(false);
        expect(set.size()).to.equal(0);
    });

    it("should clear set", function() {
        set.add("a");
        set.add("b");
        set.clear();
        expect(set.empty()).to.equal(true);
    });

    it("should return union of two sets", function() {
        set.add("a");
        set.add("b");

        var otherSet = new MySet();
        otherSet.add("b");
        otherSet.add("c");

        var result = set.union(otherSet);
        expect(result.size()).to.equal(3);
        expect(result.has("a")).to.equal(true);
        expect(result.has("b")).to.equal(true);
        expect(result.has("c")).to.equal(true);
    });

    it("should return intersection of two sets", function() {
        set.add("a");
        set.add("b");
        set.add("c");

        var otherSet = new MySet();
        otherSet.add("b");
        otherSet.add("c");
        otherSet.add("d");

        var result = set.intersect(otherSet);
        expect(result.size()).to.equal(2);
        expect(result.has("b")).to.equal(true);
        expect(result.has("c")).to.equal(true);
    });

    it("should return diff of two sets", function() {
        set.add("a");
        set.add("b");
        set.add("c");

        var otherSet = new MySet();
        otherSet.add("b");
        otherSet.add("c");
        otherSet.add("d");

        var result = set.diff(otherSet);
        expect(result.size()).to.equal(1);
        expect(result.has("a")).to.equal(true);
    });

    it("should tell if a set is the sub of another", function() {
        set.add("b");
        set.add("c");

        var otherSet = new MySet();
        otherSet.add("b");
        otherSet.add("c");
        otherSet.add("d");

        var result = set.subset(otherSet);
        expect(result).to.equal(true);

        otherSet.clear();
        otherSet.add("b");
        otherSet.add("c");
        result = set.subset(otherSet);
        expect(result).to.equal(true);

        set.add("a");
        otherSet.clear();
        otherSet.add("b");
        otherSet.add("c");
        result = set.subset(otherSet);
        expect(result).to.equal(false);
    });
});
