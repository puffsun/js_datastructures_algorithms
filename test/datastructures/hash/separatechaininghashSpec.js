"use strict";

var Hash = require("../../../src/datastructures/hash/separate_chaining_hash"),
    expect = require("chai").expect;

describe("Test Separate Chaining Hash", function() {
    var h;

    beforeEach(function() {
        h = new Hash();
    });

    it("should be empty with newly created hash", function() {
        expect(h.size()).to.equal(0);
    });

    it("should not empty with elements put", function() {
        h.put("a", "A");
        expect(h.size()).to.equal(1);

        h.put("a", "B");
        expect(h.size()).to.equal(1);

        h.put("c", "C");
        expect(h.size()).to.equal(2);
    });

    it("should contains the elements added", function() {
        h.put("a", "A");
        h.put("b", "B");
        expect(h.get("a")).to.equal("A");
        expect(h.get("c")).to.equal(undefined);

        h.put("a", "B");
        expect(h.get("a")).to.equal("B");
    });

    it("should remove the selected element", function() {
        h.put("a", "A");
        h.put("b", "B");
        expect(h.remove("c")).to.equal(false);
        expect(h.size()).to.equal(2);

        var result = h.remove("a");
        expect(result).to.equal(true);
        expect(h.size()).to.equal(1);
        expect(h.get("a")).to.equal(undefined);

        result = h.remove("b");
        expect(result).to.equal(true);
        expect(h.size()).to.equal(0);
        expect(h.get("b")).to.equal(undefined);
    });
});
