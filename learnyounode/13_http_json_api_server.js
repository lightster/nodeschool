var http = require('http')
var url = require('url')

var generateTime = function (iso_time) {
    var date = new Date(iso_time)
    return {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    }
}

var generateUnixTime = function (iso_time) {
    var date = new Date(iso_time)
    return {
        'unixtime': date.getTime()
    }
}

var server = http.createServer(function (request, response) {
    var parsed_url = url.parse(request.url, true)
    var time_parser = null

    if ('/api/parsetime' == parsed_url.pathname) {
        time_parser = generateTime
    } else if ('/api/unixtime' == parsed_url.pathname) {
        time_parser = generateUnixTime
    } else {
        return response.writeHead(404)
    }

    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(time_parser(parsed_url.query.iso)))
})
server.listen(process.argv[2])
