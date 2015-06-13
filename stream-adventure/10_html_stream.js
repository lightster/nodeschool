var trumpet = require('trumpet')
var through = require('through2')
var tr = trumpet()

process.stdin.pipe(tr).pipe(process.stdout)

var trumpetStream = tr.select('.loud').createStream()
trumpetStream.pipe(through(function (buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase())
        next()
    }))
    .pipe(trumpetStream)
