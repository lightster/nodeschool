'use strict';

var q = require('q');

function attachTitle(name) {
    return 'DR. ' + name;
}

var deferred = q.defer();

deferred.promise
    .then(attachTitle)
    .then(console.log.bind(console))
    .done();

deferred.resolve('MANHATTAN');
