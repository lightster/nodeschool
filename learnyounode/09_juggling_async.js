var http = require('http')
var bl = require('bl')

var finished = 0
var responses = ['', '', '']

var do_request = function(request_num, url) {
    http.get(url, function(response) {
        response.pipe(bl(function(err, data) {
            if (err) {
                return console.error(err)
            }

            responses[request_num] = responses[request_num].concat(data.toString())
        }))
        response.on('end', function(err, data) {
            ++finished

            if (3 == finished) {
                for (var response_num = 0; response_num < 3; response_num++) {
                    console.log(responses[response_num])
                }
            }
        })
    })
}

for (var request_num = 0; request_num < 3; request_num++) {
    do_request(request_num, process.argv[request_num + 2])
}
