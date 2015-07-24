'use strict';

var q = require('q')
var deferred = q.defer()

deferred.promise
    .then(null, console.log.bind(console))
    .done()

setTimeout(
    function () {
        deferred.reject('REJECTED!')
    },
    300
)
