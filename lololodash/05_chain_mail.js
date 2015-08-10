'use strict';

var _ = require('lodash');

module.exports = function modifyListOfStrings(list) {
  return _.chain(list)
    .map(function (word) {
      return String.prototype.toUpperCase.bind(word + 'chained').call();
    })
    .sort();
};
