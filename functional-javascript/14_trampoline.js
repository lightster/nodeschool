'use strict';

function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return repeat.bind(null, operation, --num)
}

function trampoline(fn) {
    while (fn) {
        fn = fn()
    }
}

module.exports = function(operation, num) {
    return trampoline(repeat.bind(null, operation, num))
}
