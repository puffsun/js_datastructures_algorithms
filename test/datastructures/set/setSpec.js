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
});
