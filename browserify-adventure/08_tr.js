'use strict';

var through = require('through2');
var sprintf = require('sprintf');

module.exports = function lineNumbererTransform(file) {
  if (!/\.txt$/.test(file)) {
    return through();
  }

  var stream = through(function lineNumberer(buffer, encoding, next) {
    var lines = buffer.toString().split('\n');
    var output = 'module.exports = ""';
    for (var i = 0; i < lines.length; i++) {
      if (i % 5 === 0) {
        output += ' + "' +
          sprintf('%3d %s', i, lines[i]).replace('"', '\"') +
          '\\n"\n';
      } else {
        output += ' + "' +
          sprintf('    %s', lines[i]).replace('"', '\"') +
          '\\n"\n';
      }
    }
    output += ';';

    this.push(output);

    next();
  });

  return stream;
};
