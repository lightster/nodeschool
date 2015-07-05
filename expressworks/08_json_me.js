var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function (request, result) {
    fs.readFile(process.argv[3], function (error, data) {
        result.json(JSON.parse(data))
    })
})
app.listen(process.argv[2])
