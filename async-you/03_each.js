'use strict';

var http = require('http')
var async = require('async')

async.each(
    [
        process.argv[2],
        process.argv[3]
    ],
    function (item, done) {
        var request = http.get(item, function (response) {
            response.on('data', function (data) {
            })
            response.on('end', function () {
                done(null)
            })
        })
        request.on('error', function (err) {
            done(err)
        })
    },
    function (err) {
        if (err) {
            console.log(err)
        }
    }
)
