'use strict';

var async = require('async')
var http = require('http')

async.reduce(
    [
        'one',
        'two',
        'three'
    ],
    0,
    function (memo, item, callback) {
        var request = http.get(
            process.argv[2] + '?number=' + item,
            function (response) {
                var body = ''
                response.on('data', function (chunk) {
                    body += chunk.toString()
                })
                response.on('end', function () {
                    callback(null, memo + Number(body))
                })
            }
        )
        request.on('error', function (err) {
            callback(err)
        })
    },
    function (err, memo) {
        console.log(memo)
    }
)
