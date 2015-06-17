'strict';

var combine = require('stream-combiner')
var split = require('split')
var through = require('through2')
var zlib = require('zlib')

module.exports = function () {
    var currentGenre = null

    return combine(
        split(),
        through(
            function (buffer, encoding, next) {
                var newlineJson = buffer.toString()
                if (!newlineJson) {
                    next()
                    return
                }

                var obj = JSON.parse(newlineJson)
                if (obj['type'] == 'genre') {
                    if (currentGenre) {
                        this.push(JSON.stringify(currentGenre) + "\n")
                    }

                    currentGenre = {
                        'name': obj['name'],
                        'books': []
                    }
                } else {
                    currentGenre.books.push(obj['name'])
                }

                next()
            },
            function (done) {
                if (currentGenre) {
                    this.push(JSON.stringify(currentGenre) + "\n")
                }
                done()
            }
        ),
        zlib.createGzip()
    )
}
