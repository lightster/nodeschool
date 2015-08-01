'use strict';

var http = require('q-io/http');
var _ = require('lodash');

http.read('http://localhost:7000')
    .then(function(sessionId) {
        var getSessionUrl = _.bind(String.prototype.concat, 'http://localhost:7001/');
        return http.read(getSessionUrl(sessionId));
    })
    .then(_.flowRight(console.log, JSON.parse))
    .then(null, console.error.bind(console))
    .done();
