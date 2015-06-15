var duplexer = require('duplexer')
var through = require('through2').obj

module.exports = function (counter) {
    var counts = {}

    var count = function (buffer, encoding, next) {
        if (!counts[buffer.country]) {
            counts[buffer.country] = 0
        }

        ++counts[buffer.country]

        next()
    }

    var finishCount = function() {
        counter.setCounts(counts)
    }

    var write = through(count, finishCount)

    var duplex = duplexer(write, counter)

    return duplex
}
