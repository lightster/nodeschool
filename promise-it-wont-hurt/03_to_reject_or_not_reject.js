'use strict';

var q = require('q')
var deferred = q.defer()

deferred.promise
    .then(
        console.log.bind(console),
        console.log.bind(console)
    )
    .done()

deferred.resolve('I FIRED')
deferred.reject('I DID NOT FIRE')
