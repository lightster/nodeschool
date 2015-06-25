'use strict';

function repeat(operation, num) {
    if (num <= 0) {
        return
    } else if (num > 100) {
        repeat(operation, 100)
        return repeat.bind(null, operation, num - 100)
    } else {
        operation()
        repeat(operation, --num)
    }
}

function trampoline(fn) {
    while (fn) {
        fn = fn()
    }
}

module.exports = function(operation, num) {
    return trampoline(repeat.bind(null, operation, num))
}
