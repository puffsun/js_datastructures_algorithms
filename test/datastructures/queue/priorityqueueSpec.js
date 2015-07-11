"use strict";

var PriorityQueue = require("../../../src/datastructures/queue/priority_queue"),
    expect = require("chai").expect;

describe("Test Priority Queue", function() {
    var pq;
    beforeEach(function() {
        pq = new PriorityQueue();
    });

    it("should be empty with newly created priority queue", function() {
        expect(pq.empty()).to.equal(true);
        expect(pq.size()).to.equal(0);
    });

    it("should be empty with newly created queue", function() {
        expect(pq.empty()).to.equal(true);
        expect(pq.size()).to.equal(0);
        expect(pq.dequeue()).to.equal(undefined);
    });

    it("should be FIFO as expected", function() {
        pq.enqueue("a");
        expect(pq.empty()).to.equal(false);
        expect(pq.size()).to.equal(1);
        expect(pq.front()).to.equal("a");

        var e = pq.dequeue();
        expect(e).to.equal("a");
        expect(pq.empty()).to.equal(true);
        expect(pq.size()).to.equal(0);

        pq.enqueue("a");
        pq.enqueue("b");
        pq.enqueue("c");
        expect(pq.size()).to.equal(3);
        expect(pq.dequeue()).to.equal("a");
        expect(pq.dequeue()).to.equal("b");
        expect(pq.dequeue()).to.equal("c");
    });

    it("should be empty after clearing", function() {
        pq.enqueue("A");
        pq.clear();
        expect(pq.empty()).to.equal(true);
        expect(pq.size()).to.equal(0);
    });

    it("should leverage priority", function() {
    });
});
