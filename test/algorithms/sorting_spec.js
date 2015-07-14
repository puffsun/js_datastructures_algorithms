"use strict";

var Sorting = require("../../src/algorithms/sorting"),
    expect = require("chai").expect,
    sinon = require("sinon");

describe("Test sorting algorithms", function() {
    describe("Test bubble sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.bobble_sort(null)).to.eql(null);
            expect(Sorting.bobble_sort([])).to.eql([]);
            expect(Sorting.bobble_sort([1])).to.eql([1]);
            expect(Sorting.bobble_sort([1, 2])).to.eql([1, 2]);
            expect(Sorting.bobble_sort([2, 1])).to.eql([1, 2]);
        });
    });
});
