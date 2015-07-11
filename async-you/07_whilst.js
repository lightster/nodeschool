'use strict';

var async = require('async')
var http = require('http')

var count = 0
var body = ''

async.whilst(
    function () {
        return body.indexOf('meerkat') == -1
    },
    function (done) {
        body = ''
        var request = http.get(process.argv[2], function (response) {
            response.on('data', function (chunk) {
                body += chunk.toString()
            })
            response.on('end', function () {
                ++count
                done()
            })
        })
        request.on('error', function (err) {
            done(err)
        })
    },
    function (err) {
        if (err) {
            return console.error(err)
        }
        console.log(count)
    }
)
