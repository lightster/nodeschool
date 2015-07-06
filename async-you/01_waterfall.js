'use strict';

var fs = require('fs')
var async = require('async')
var http = require('http')

async.waterfall(
    [
        function (callback) {
            var url = ''
            fs.readFile(process.argv[2], function (err, data) {
                callback(err, data.toString())
            })
        },
        function (url, callback) {
            var body = ''
            http.get(url, function (response) {
                response.on('data', function (data) {
                    body += data.toString()
                })
                response.on('end', function () {
                    callback(null, body)
                })
            }).on('error', function (err) {
                callback(err)
            })
        }
    ],
    function (err, result) {
        if (err) {
            return console.error(err)
        }

        console.log(result)
    }
)
