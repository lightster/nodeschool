'use strict';

var q = require('q')
var deferred = q.defer()

deferred.promise
    .then(console.log.bind(console))
    .done()

setTimeout(
    function() {
        deferred.resolve('RESOLVED!')
    },
    300
)
