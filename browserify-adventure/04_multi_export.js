'use strict';

var ndjson = require('./04_ndjson');

console.log(ndjson.parse(prompt('From ndjson:')));
console.log(ndjson.stringify(prompt('To ndjson:')));
