'strict';

function reduce(array, callback, initial) {
    var index = 0
    function reduceRecursively(previousValue, index) {
        if (index >= array.length) {
            return previousValue
        }

        var newPreviousValue = callback(previousValue, array[index], index, array)
        return reduceRecursively(newPreviousValue, ++index)
    }

    return reduceRecursively(initial, 0)
}

module.exports = reduce
