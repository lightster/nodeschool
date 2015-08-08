'use strict';

var _ = require('lodash');

module.exports = function worker(articles) {
  return _.sortBy(articles, function compareArticle(article) {
    return -article.quantity;
  });
};
