'use strict';

var async = require('async')
var http = require('http')

function retrieveData(url, done) {
    var body = ''
    http.get(url, function (response) {
        response.on('data', function (data) {
            body += data.toString()
        })
        response.on('end', function () {
            done(null, body)
        })
    })
}

async.series(
    {
        requestOne: function(done) {
            retrieveData(process.argv[2], done)
        },
        requestTwo: function(done) {
            retrieveData(process.argv[3], done)
        }
    },
    function (err, results) {
        console.log(results)
    }
)
