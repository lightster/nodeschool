var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback) {
    fs.readdir(directory, function(err, list) {
        if (err) {
            return callback(err);
        }

        var files = [];
        list.forEach(function(file) {
            if (path.extname(file) == '.' + extension) {
                files.push(file);
            }
        });
        callback(null, files);
    });
}
