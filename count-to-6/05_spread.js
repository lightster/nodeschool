'use strict';

var inputNumbers = process.argv.slice(2)
var min = Math.min(...inputNumbers)

console.log(`The minimum of [${inputNumbers}] is ${min}`)
