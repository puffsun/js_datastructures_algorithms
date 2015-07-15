"use strict";

var search = require("../../src/algorithms/searching"),
    expect = require('chai').expect;

describe("Test searching", function() {
    describe("test sequential searching", function() {
        it("should return null for null", function() {
            expect(search.sequentialSearch(null, null)).to.equal(null);
        });

        it("should return -1 for empty collection", function() {
            expect(search.sequentialSearch([], "a")).to.equal(-1);
        });

        it("should return -1 for non-existing element", function() {
            expect(search.sequentialSearch(["b", "c"], "a")).to.equal(-1);
        });

        it("should return the element been searching", function() {
            expect(search.sequentialSearch(["b", "c"], "c")).to.equal(1);
        });
    });
});
