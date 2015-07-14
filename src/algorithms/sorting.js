"use strict";

function swap(ary, i, j) {
    var tmp = ary[i];
    ary[i] = ary[j];
    ary[j] = tmp;
}

var Sorting = {
    bobble_sort: function(ary) {
        if (!ary) {
            return null;
        }

        var len = ary.length,
            i, j;
        for (i = 0; i < len; i++) {
            for (j = 0; j < len - 1 - i; j++) {
                if (ary[j] > ary[j + 1]) {
                    swap(ary, j, j + 1);
                }
            }
        }
        return ary;
    },
};

module.exports = Sorting;
