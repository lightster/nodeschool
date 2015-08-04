'use strict';

var url = require('url');
var querystring = require('querystring');

var addr = prompt('Enter a URL:');

console.log(
  url.resolve(
    addr,
    querystring.parse(url.parse(addr).query).file
  )
);
