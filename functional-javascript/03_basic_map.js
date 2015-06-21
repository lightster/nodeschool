'strict';

function doubleAll(numbers) {
    return numbers.map(function (value, index) {
        return value * 2
    })
}

module.exports = doubleAll
