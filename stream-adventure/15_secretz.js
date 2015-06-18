'strict';

var crypto = require('crypto')
var zlib = require('zlib')
var tar = require('tar')
var through = require('through2')

var tarParser = tar.Parse()
tarParser.on('entry', function (entry) {
    if (entry.type !== 'File') {
        return
    }

    entry
        .pipe(crypto.createHash('md5', { encoding: 'hex' }))
        .pipe(through(function (buffer, encoding, next) {
            console.log(buffer.toString() + " " + entry.path)

            next()
        }))
})

process.stdin
    .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
    .pipe(zlib.createGunzip())
    .pipe(tarParser)
