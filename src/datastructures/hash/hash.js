"use strict";

function Hash() {
    this.items = [];
    this.length = 0;
}

function looseHashCode(key) {
    var hash = 0,
        i, len;
    for (i = 0, len = key.length; i < len; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
}

Hash.prototype.size = function() {
    return this.length;
};

Hash.prototype.put = function(key, value) {
    var position = looseHashCode(key);
    var oldValue = this.items[position];
    if (!oldValue) {
        // insert new value
        this.length += 1;
    }
    this.items[position] = value;
};

Hash.prototype.get = function(key) {
    var position = looseHashCode(key);
    return this.items[position];
};

Hash.prototype.remove = function(key) {
    var position = looseHashCode(key);
    var oldValue = this.items[position];
    delete this.items[position];
    // The value to remove exists.
    if (oldValue) {
        this.length -= 1;
    }
    return !!oldValue;
};

module.exports = Hash;
