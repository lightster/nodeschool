'use strict';

var _ = require('lodash');

module.exports = function aggregateArticles(articles) {
  return _.chain(articles)
    .reduce(
      function sumArticle(accumulator, article) {
        if (!accumulator[article.article]) {
          accumulator[article.article] = 0;
        }
        accumulator[article.article] += article.quantity;
        return accumulator;
      },
      {}
    )
    .map(function transformToObject(quantity, article) {
      return {
        'article':      parseInt(article),
        'total_orders': quantity
      };
    })
    .sortBy('total_orders')
    .reverse();
};
