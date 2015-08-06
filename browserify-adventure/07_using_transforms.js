'use strict';

var fs = require('fs');
var sprintf = require('sprintf');

var data = fs.readFileSync(
  '/usr/local/lib/node_modules/browserify-adventure' +
    '/problems/using_transforms/wake.txt',
  'utf8'
);
var lines = data.split('\n');

for (var i = 0; i < lines.length; i++) {
  if (i % 5 === 0) {
    console.log(sprintf('%3d %s', i, lines[i]));
  } else {
    console.log(sprintf('    %s', lines[i]));
  }
}
