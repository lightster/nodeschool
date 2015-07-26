'use strict';

var q = require('q')

var deferred = q.defer()

deferred.promise
    .then(
        console.log.bind(console)
    )
    .done()

deferred.resolve('SECOND')
console.log('FIRST')

// outputs:
// FIRST
// SECOND
