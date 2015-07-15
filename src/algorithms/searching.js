"use strict";

var search = {
    sequentialSearch: function(ary, e) {
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
    }
};

module.exports = search;
