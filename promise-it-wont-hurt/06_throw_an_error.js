'use strict';

var q = require('q');

function parsePromised(json) {
    var deferred = q.defer();

    try {
        deferred.resolve(JSON.parse(json));
    } catch (e) {
        deferred.reject(e);
    }

    return deferred.promise;
}

parsePromised(process.argv[2])
    .then(null, console.log.bind(console))
    .done();
