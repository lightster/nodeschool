'use strict';

module.exports.parse = function parse(str) {
  return str.split('\n').map(JSON.parse);
};

module.exports.stringify = function stringify(rows) {
  return rows.map(JSON.stringify).join('\n');
};
