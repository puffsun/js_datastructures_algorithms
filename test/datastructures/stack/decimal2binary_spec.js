"use strict";

var devideBy2 = require('../../../src/datastructures/stack/decimal2binary'),
    expect = require("chai").expect;

describe("Test Decimal to Binary", function() {
    it("should convert decimal value to binary", function() {
        expect(devideBy2(12)).to.equal("1100");
    });
});
