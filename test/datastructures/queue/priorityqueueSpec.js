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
        expect(pq.front().element).to.equal("a");

        var e = pq.dequeue();
        expect(e.element).to.equal("a");
        expect(pq.empty()).to.equal(true);
        expect(pq.size()).to.equal(0);

        pq.enqueue("a");
        pq.enqueue("b");
        pq.enqueue("c");
        expect(pq.size()).to.equal(3);
        expect(pq.dequeue().element).to.equal("a");
        expect(pq.dequeue().element).to.equal("b");
        expect(pq.dequeue().element).to.equal("c");
    });

    it("should be empty after clearing", function() {
        pq.enqueue("A");
        pq.clear();
        expect(pq.empty()).to.equal(true);
        expect(pq.size()).to.equal(0);
    });

    it("should leverage priority", function() {
        pq.enqueue("a", 10);
        pq.enqueue("b", 20);
        pq.enqueue("b", 20);
        pq.enqueue("c", 30);

        expect(pq.dequeue().element).to.equal("c");
        expect(pq.dequeue().element).to.equal("b");
        expect(pq.dequeue().element).to.equal("b");
        expect(pq.dequeue().element).to.equal("a");
    });
});
