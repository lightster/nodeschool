'use strict';

var _ = require('lodash');

module.exports = function (user) {
  return _.template(
    'Hello <%= name %> (logins: <%= login.length %>)',
    user
  )(user);
};
