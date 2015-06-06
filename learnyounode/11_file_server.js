var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
    var file_stream = fs.createReadStream(process.argv[3])
    file_stream.pipe(response)
})
server.listen(process.argv[2])
