var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(response) {
    var content = ''
    response.pipe(bl(function(err, data) {
        content = content.concat(data.toString())
    }))
    response.on('end', function(err, data) {
        console.log(content.length)
        console.log(content)
    })
})
