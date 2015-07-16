/*
Minimum heap, i.e. smallest node at root.

**Note:** does not accept null or undefined. This is by design. Those values
cause comparison problems and might report false negative during extraction.

## Overview example:

```js
var heap = new Heap([5, 6, 3, 4]);
heap.add(10); // => 10
heap.removeMin(); // => 3
heap.peekMin(); // => 4
```

## Properties:

- size: total number of items.
 */
"use strict";

function Heap(dataToHeapify) {
    var i, item, j, len;
    if (!dataToHeapify) {
        dataToHeapify = [];
    }

    /*
    Pass an optional array to be heapified. Takes only O(n) time.
     */
    this._data = [void 0];
    for (j = 0, len = dataToHeapify.length; j < len; j++) {
        item = dataToHeapify[j];
        if (item !== null && item !== undefined) {
            this._data.push(item);
        }
    }

    if (this._data.length > 1) {
        for (i = 2, len = this._data.length; i < len; i++) {
            this._upHeap(i);
        }
    }
    this.size = this._data.length - 1;
}

Heap.prototype.add = function(value) {

    /*
    **Remember:** rejects null and undefined for mentioned reasons.

    _Returns:_ the value added.
     */
    if (value === undefined || value === null) {
        return;
    }
    this._data.push(value);
    this._upHeap(this._data.length - 1);
    this.size++;
    return value;
};

Heap.prototype.removeMin = function() {

    /*
    _Returns:_ the smallest item (the root).
     */
    var min;
    if (this._data.length === 1) {
        return;
    }
    this.size--;
    if (this._data.length === 2) {
        return this._data.pop();
    }
    min = this._data[1];
    this._data[1] = this._data.pop();
    this._downHeap();
    return min;
};

Heap.prototype.peekMin = function() {

    /*
    Check the smallest item without removing it.

    _Returns:_ the smallest item (the root).
     */
    return this._data[1];
};

Heap.prototype._upHeap = function(index) {
    var valueHolder = this._data[index];

    while (this._data[index] < this._data[_parent(index)] && index > 1) {
        _swap(this._data, _parent(index), index);
        index = _parent(index);
    }
};

Heap.prototype._downHeap = function() {
    var currentIndex = 1,
        smallerChildIndex;

    while (_leftChild(currentIndex < this._data.length)) {
        smallerChildIndex = _leftChild(currentIndex);
        if (smallerChildIndex < this._data.length - 1) {
            if (this._data[_rightChild(currentIndex)] < this._data[smallerChildIndex]) {
                smallerChildIndex = _rightChild(currentIndex);
            }
        }
        if (this._data[smallerChildIndex] < this._data[currentIndex]) {
            _swap(this._data, smallerChildIndex, currentIndex);
            currentIndex = smallerChildIndex;
        } else {
            break;
        }
    }
};

function _parent(index) {
    return index >> 1;
}

function _leftChild(index) {
    return index << 1;
}

function _rightChild(index) {
    return (index << 1) + 1;
}

function _swap(ary, i, j) {
    var tmp = ary[i];
    ary[i] = ary[j];
    ary[j] = tmp;
}

module.exports = Heap;
