'use strict';

var http = require('q-io/http');

http.read('http://localhost:7000')
    .then(function(sessionId) {
        return http.read('http://localhost:7001/' + sessionId);
    })
    .then(function(userJson) {
        console.log(JSON.parse(userJson.toString()));
    })
    .then(null, console.error.bind(console))
    .done();
