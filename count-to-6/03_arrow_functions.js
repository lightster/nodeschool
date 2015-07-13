'use strict';

var inputs = process.argv.slice(2)
var result = inputs
    .map((string) => string.substring(0, 1))
    .reduce((aggr, character) => aggr + character)

console.log(`[${inputs}] becomes "${result}"`)
