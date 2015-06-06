var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (request, response) {
    if ('POST' != request.method) {
        response.end("I expected a POST")
    }

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(response)
})
server.listen(process.argv[2])
