'use strict';

var _ = require('lodash');

module.exports = function countTheComments(comments) {
  return _.chain(comments)
    .groupBy('username')
    .map(function countUserComments(userComments) {
      return {
        'username': _.first(userComments).username,
        'comment_count': _.size(userComments)
      };
    })
    .sortBy('comment_count')
    .reverse();
};
