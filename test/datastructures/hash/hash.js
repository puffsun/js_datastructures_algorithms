"use strict";

var Hash = require("../../../src/datastructures/hash/hash"),
    expect = require("chai").expect;

describe("Test Hash", function() {
    var hash;

    beforeEach(function() {
        hash = new Hash();
    });

    it("should be empty for newly created hash", function() {
        expect(hash.size()).to.equal(0);
    });

    it("should not empty with element put", function() {
        hash.put("a", "A");
        expect(hash.size()).to.equal(1);
        expect(hash.get("a")).to.equal("A");

        hash.put("b", "B");
        expect(hash.size()).to.equal(2);
        expect(hash.get("b")).to.equal("B");

        hash.put("a", "AA");
        expect(hash.size()).to.equal(2);
        expect(hash.get("a")).to.equal("AA");
    });

    it("should remove element from hash", function() {
        hash.put("a", "A");
        hash.put("b", "B");

        var result = hash.remove("a");
        expect(result).to.equal(true);
        expect(hash.size()).to.equal(1);
        expect(hash.get("a")).to.equal(undefined);

        result = hash.remove("a");
        expect(result).to.equal(false);
        expect(hash.size()).to.equal(1);
        expect(hash.get("a")).to.equal(undefined);

        result = hash.remove("b");
        expect(result).to.equal(true);
        expect(hash.size()).to.equal(0);
        expect(hash.get("b")).to.equal(undefined);

        result = hash.remove("b");
        expect(result).to.equal(false);
        expect(hash.size()).to.equal(0);
        expect(hash.get("b")).to.equal(undefined);
    });
});
