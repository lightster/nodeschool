'use strict';

var http = require('http')
var async = require('async')

async.map(
    [
        process.argv[2],
        process.argv[3]
    ],
    function (url, done) {
        var request = http.get(url, function (response) {
            var body = ''
            response.on('data', function (data) {
                body += data.toString()
            })
            response.on('end', function () {
                done(null, body)
            })
        })
        request.on('error', function (err) {
            done(err)
        })
    },
    function (err, results) {
        if (err) {
            return console.log(err)
        }

        console.log(results)
    }
)
