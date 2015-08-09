'use strict';

var _ = require('lodash');

module.exports = function worker(list) {
  return _.forEach(list, function iteration(value) {
    if (value.population >= 1) {
      value.size = 'big';
    } else if (value.population >= 0.5) {
      value.size = 'med';
    } else {
      value.size = 'small';
    }
  });
};
