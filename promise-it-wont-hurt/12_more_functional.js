'use strict';

var http = require('q-io/http');
var _ = require('lodash');

http.read('http://localhost:7000')
    .then(function(sessionId) {
        http.read('http://localhost:7001/' + sessionId)
            .then(_.flowRight(console.log, JSON.parse))
            .then(null, console.error.bind(console))
            .done();
    })
    .then(null, console.error.bind(console))
    .done();
