var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var expected_extension = process.argv[3];

fs.readdir(directory, function (err, list) {
    list.forEach(function(file) {
        if (path.extname(file) == '.' + expected_extension) {
            console.log(file);
        }
    });
});
