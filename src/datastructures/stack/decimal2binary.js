"use strict";

var Stack = require("./stack");

function devideBy2(decNum) {
    var temp,
        binString = '',
        stack = new Stack();

    while (decNum > 0) {
        temp = Math.floor(decNum % 2);
        stack.push(temp);
        decNum = Math.floor(decNum / 2);
    }

    while (!stack.empty()) {
        binString += stack.pop();
    }

    return binString;
}

module.exports = devideBy2;
