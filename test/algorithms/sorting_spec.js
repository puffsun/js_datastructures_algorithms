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

    describe("Test selection sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.selection_sort(null)).to.eql(null);
            expect(Sorting.selection_sort([])).to.eql([]);
            expect(Sorting.selection_sort([1])).to.eql([1]);
            expect(Sorting.selection_sort([1, 2])).to.eql([1, 2]);
            expect(Sorting.selection_sort([2, 1])).to.eql([1, 2]);
        });
    });

    describe("Test insertion sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.insertion_sort(null)).to.eql(null);
            expect(Sorting.insertion_sort([])).to.eql([]);
            expect(Sorting.insertion_sort([1])).to.eql([1]);
            expect(Sorting.insertion_sort([1, 2])).to.eql([1, 2]);
            expect(Sorting.insertion_sort([2, 1])).to.eql([1, 2]);
        });
    });

    describe("Test merge sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.merge_sort(null)).to.eql(null);
            expect(Sorting.merge_sort([])).to.eql([]);
            expect(Sorting.merge_sort([1])).to.eql([1]);
            expect(Sorting.merge_sort([1, 2])).to.eql([1, 2]);
            expect(Sorting.merge_sort([2, 1])).to.eql([1, 2]);
        });
    });

    describe("Test quick sort", function() {
        it("should sort the given elements", function() {
            expect(Sorting.quick_sort(null)).to.eql(null);
            expect(Sorting.quick_sort([])).to.eql([]);
            expect(Sorting.quick_sort([1])).to.eql([1]);
            expect(Sorting.quick_sort([1, 2])).to.eql([1, 2]);
            expect(Sorting.quick_sort([2, 1])).to.eql([1, 2]);
            expect(Sorting.quick_sort([2, 1, 5, 3])).to.eql([1, 2, 3, 5]);
        });
    });
});
