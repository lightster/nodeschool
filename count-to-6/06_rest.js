'use strict';

module.exports = function average(...numbers) {
    var total = 0
    numbers.forEach(function (number) {
        total += number
    })
    return total / numbers.length
}
