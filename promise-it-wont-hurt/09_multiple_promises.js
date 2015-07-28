'use strict';

var q = require('q');

function all(deferred1, deferred2) {
    var allDeferred = q.defer();
    var resolvedValues = [];
    var counter = 0;

    function resolve(resolvedValue) {
        ++counter;
        resolvedValues.push(resolvedValue);
        if (counter >= 2) {
            allDeferred.resolve(resolvedValues);
        }
    }

    function reject() {
        allDeferred.reject();
    }

    function setupDeferred(deferred) {
        deferred.promise
            .then(resolve)
            .then(null, reject)
            .done();
    }

    setupDeferred(deferred1);
    setupDeferred(deferred2);

    return allDeferred.promise;
}

var deferred1 = q.defer();
var deferred2 = q.defer();

all(deferred1, deferred2)
    .then(console.log.bind(console))
    .done();

setTimeout(
    function() {
        deferred1.resolve('PROMISES');
        deferred2.resolve('FTW');
    },
    200
);
