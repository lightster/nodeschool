'use strict';

var uniq = require('uniq');

module.exports = function uniquely(csv) {
  return uniq(csv.split(','));
};
