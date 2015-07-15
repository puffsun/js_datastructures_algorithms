"use strict";

var search = require("../../src/algorithms/searching"),
    expect = require('chai').expect;

describe("Test searching", function() {
    describe("test sequential searching", function() {
        it("should return null for null", function() {
            expect(search.sequential_search(null, null)).to.equal(null);
        });

        it("should return -1 for empty collection", function() {
            expect(search.sequential_search([], "a")).to.equal(-1);
        });

        it("should return -1 for non-existing element", function() {
            expect(search.sequential_search(["b", "c"], "a")).to.equal(-1);
        });

        it("should return the element been searching", function() {
            expect(search.sequential_search(["b", "c"], "c")).to.equal(1);
        });
    });

    describe("test binary searching", function() {
        it("should return null for null", function() {
            expect(search.binary_search(null, null)).to.equal(null);
        });

        it("should return -1 for empty collection", function() {
            expect(search.binary_search([], "a")).to.equal(-1);
        });

        it("should return -1 for non-existing element", function() {
            expect(search.binary_search(["b", "c"], "a")).to.equal(-1);
        });

        it("should return the element been searching", function() {
            expect(search.binary_search(["b", "c"], "c")).to.equal(1);
        });
    });
});
