'use strict';

var express = require('express')
var app = express()

app.get('/home', function (request, result) {
    result.end('Hello World!')
})
app.listen(process.argv[2])
