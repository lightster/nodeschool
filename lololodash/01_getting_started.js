'use strict';

var _ = require('lodash');

module.exports = function worker(users) {
  return _.where(users, {'active': true});
};
