'use strict';

module.exports = function (target, method) {
    var originalMethod = target[method]
    var spy = {count: 0}

    target[method] = function () {
        ++spy.count
        return originalMethod.apply(target, arguments)
    }

    return spy
}
