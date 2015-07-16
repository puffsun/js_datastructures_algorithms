"use strict";

var Heap = require('../../../src/datastructures/heap/heap'),
    expect = require('chai').expect;

function extractMinsAndValidate(heap, output) {
    var actualOutput = [],
        i = 0;

    while (heap.peekMin() !== null && heap.peekMin() !== undefined) {
        actualOutput[i] = heap.removeMin();
        i++;
    }
    expect(actualOutput).to.eql(output);
}

describe("Test Heap", function() {
    describe("Add, peek minimum and remove it", function() {
        var heap = new Heap(),
            heap2 = new Heap();

        it("should return undefined if minimum is not found (heap empty)", function() {
            expect(heap.peekMin()).to.equal(undefined);
            expect(heap.removeMin()).to.equal(undefined);
        });

        it("should discard undefined and null", function() {
            expect(heap.add(void 0)).to.equal(undefined);
            expect(heap.add(0)).to.equal(0);
            expect(heap.add(null)).to.equal(undefined);
            heap.add(9);
            heap.add(8);
            extractMinsAndValidate(heap, [0, 8, 9]);
        });

        it("should return the value added, even negative ones", function() {
            expect(heap2.add(-1)).to.equal(-1);
            expect(heap2.add(0)).to.equal(0);
            expect(heap2.add(-2)).to.equal(-2);
            heap2.add(void 0);
            heap2.add(-10);
            heap2.add(4);
            heap2.add(9);
            heap2.add(void 0);
            heap2.add(99);
            heap2.add(-6);
            heap2.add(8);
            heap2.add(7);
        });

        it("should have the correct minimum", function() {
            extractMinsAndValidate(heap2, [-10, -6, -2, -1, 0, 4, 7, 8, 9, 99]);
        });
    });

    describe("Size checking", function() {
        var heap = new Heap(),
            heap2 = new Heap([1, 2, void 0, 3]);

        it("should have a size of 0 initially", function() {
            expect(heap.size).to.equal(0);
        });

        it("should have the right size after insertion and deletion", function() {
            heap.add(1);
            expect(heap.size).to.equal(1);
            heap.add(5);
            expect(heap.size).to.equal(2);
            heap.add(void 0);
            expect(heap.size).to.equal(2);
            heap.removeMin();
            expect(heap.size).to.equal(1);
            heap.add(5);
            expect(heap.size).to.equal(2);
        });

        it("should have a size back to 0 when heap's emptied", function() {
            heap.removeMin();
            heap.removeMin();
            expect(heap.size).to.equal(0);
        });

        it("should not have a negative value", function() {
            heap.removeMin();
            expect(heap.size).to.equal(0);
            heap.removeMin();
            expect(heap.size).to.equal(0);
        });

        it("should be initialized well", function() {
            expect(heap2.size).to.equal(3);
        });
    });

    describe("Initialization passing an array", function() {
        var heap = new Heap([-3, void 0, 4, 6, -8, null, 5, -3, 2, 5, 6, -7]);

        it("should heapify the array", function() {
            extractMinsAndValidate(heap, [-8, -7, -3, -3, 2, 4, 5, 5, 6, 6]);
        });
    });
});
