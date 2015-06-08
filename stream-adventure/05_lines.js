'strict';

var through2 = require('through2')
var split = require('split')

var line_num = 1

process.stdin
    .pipe(split())
    .pipe(through2(function (buffer, encoding, next) {
        if (0 == line_num % 2) {
            this.push(buffer.toString().toUpperCase() + "\n")
        } else {
            this.push(buffer.toString().toLowerCase() + "\n")
        }

        ++line_num

        next()
    }))
    .pipe(process.stdout)
