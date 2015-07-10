"use strict";

var Queue = require("../../../src/datastructures/queue/queue.js"),
    expect = require("chai").expect;

describe("Test queue", function() {
    it("should be empty with newly created queue", function() {
        var queue = new Queue();
        expect(queue.empty()).to.equal(true);
        expect(queue.size()).to.equal(0);
        expect(queue.dequeue()).to.equal(undefined);
    });

    it("should be FIFO as expected", function() {
        var queue = new Queue();
        queue.enqueue("a");
        expect(queue.empty()).to.equal(false);
        expect(queue.size()).to.equal(1);
        expect(queue.front()).to.equal("a");

        var e = queue.dequeue();
        expect(e).to.equal("a");
        expect(queue.empty()).to.equal(true);
        expect(queue.size()).to.equal(0);

        queue.enqueue("a");
        queue.enqueue("b");
        queue.enqueue("c");
        expect(queue.size()).to.equal(3);
        expect(queue.dequeue()).to.equal("a");
        expect(queue.dequeue()).to.equal("b");
        expect(queue.dequeue()).to.equal("c");
    });
});
