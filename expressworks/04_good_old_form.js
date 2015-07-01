'use strict';

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function (request, response) {
    response.end(request.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
