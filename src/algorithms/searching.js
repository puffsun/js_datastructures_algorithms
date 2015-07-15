"use strict";

var sort = require('./sorting');

function binary_search_rec(ary, low, high, e) {
    if (low > high) {
        return -1;
    }
    var mid = Math.floor((low + high) / 2);
    if (e > ary[mid]) {
        return binary_search_rec(ary, mid + 1, high, e);
    } else if (e < ary[mid]) {
        return binary_search_rec(ary, low, mid - 1, e);
    } else {
        return mid;
    }
}

var search = {
    sequential_search: function(ary, e) {
        if (!ary) {
            return null;
        }

        var index, len;
        for (index = 0, len = ary.length; index < len; index++) {
            if (ary[index] === e) {
                return index;
            }
        }
        return -1;
    },

    binary_search: function(ary, e) {
        if (!ary) {
            return null;
        }

        ary = sort.quick_sort(ary);
        return binary_search_rec(ary, 0, ary.length - 1, e);
    }
};

module.exports = search;
