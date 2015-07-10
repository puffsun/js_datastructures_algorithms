"use strict";

var PriorityQueue = require("../../../src/datastructures/queue/priority_queue"),
    expect = require("chai").expect;

describe("Testing Priority Queue", function() {
    it("should be empty with newly created priority queue", function() {
        var pq = new PriorityQueue();
        expect(pq.empty()).to.equal(true);
        expect(pq.size()).to.equal(0);
    });
});
