'use strict';

var async = require('async')
var http = require('http')

async.series(
    {
        posts: function (done) {
            async.times(
                5,
                function (n, next) {
                    var request = http.request(
                        {
                            method: 'POST',
                            host: process.argv[2],
                            port: process.argv[3],
                            path: '/users/create'
                        },
                        function (response) {
                            var body = ''
                            response.on('data', function (data) {
                                body = data.toString()
                            })
                            response.on('end', function () {
                                next(null, body)
                            })
                        }
                    )
                    request.on('error', function (err) {
                        next(err)
                    })

                    request.write(JSON.stringify({
                        user_id: n + 1
                    }))
                    request.end()
                },
                function (err, result) {
                    done(err, result)
                }
            )
        },
        get: function (done) {
            var request = http.request(
                {
                    method: 'GET',
                    host: process.argv[2],
                    port: process.argv[3],
                    path: '/users'
                },
                function (response) {
                    var body = ''
                    response.on('data', function (data) {
                        body = data.toString()
                    })
                    response.on('end', function () {
                        console.log(body)
                    })
                }
            )
            request.on('error', function (err) {
                done(err)
            })

            request.end()
        }
    },
    function (err, result) {
        if (err) {
            return console.error(err)
        }
    }
)
