'use strict';

var http = require('q-io/http');

http.read('http://localhost:1337')
    .then(function(body) {
        console.log(JSON.parse(body));
    })
    .done();
