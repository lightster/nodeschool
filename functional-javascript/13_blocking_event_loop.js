'use strict';

function repeat(operation, num) {
    if (num <= 0) {
        return
    }

    operation()

    setTimeout(
        repeat.bind(null, operation, --num),
        1
    )
}

module.exports = repeat
