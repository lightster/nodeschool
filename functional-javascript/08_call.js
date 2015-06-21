'strict';

module.exports = function () {
    return Array.prototype.reduce.call(
        arguments,
        function (count, possibleDuck) {
            if (Object.prototype.hasOwnProperty.call(possibleDuck, 'quack')) {
                return count + 1
            }

            return count
        },
        0
    )
}
