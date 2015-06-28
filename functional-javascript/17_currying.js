'use strict';

function curryN(fn, n) {
    if (typeof n === 'undefined') {
        n = fn.length
    } else if (n == 0) {
        return fn.call(this)
    }

    return function (value) {
        return curryN(fn.bind(this, value), n - 1)
    }
}

module.exports = curryN
