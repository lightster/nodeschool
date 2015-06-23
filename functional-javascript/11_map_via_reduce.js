'use strict';

module.exports = function arrayMap(arr, fn) {
    return arr.reduce(
        function (reduced, value) {
            reduced.push(fn(value))
            return reduced
        },
        []
    )
}
