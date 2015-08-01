'use strict';

var http = require('q-io/http');
var _ = require('lodash');

http.read('http://localhost:7000')
    .then(_.flowRight(
        http.read.bind(http),
        _.bind(String.prototype.concat, 'http://localhost:7001/')
    ))
    .then(_.flowRight(console.log, JSON.parse))
    .then(null, console.error.bind(console))
    .done();
