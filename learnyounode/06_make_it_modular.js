var file_filter = require('./06_file_filter_module');

file_filter(process.argv[2], process.argv[3], function(err, files) {
    files.forEach(function(file) {
        console.log(file);
    });
})
