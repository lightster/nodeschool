'use strict';

var _ = require('lodash');

module.exports = function categorizeFreelancers(freelancers) {
  var average = _.reduce(
      freelancers,
      function averageSalaries(accumulator, freelancer) {
        return accumulator + freelancer.income;
      },
      0
    ) / _.size(freelancers);

  return {
    'average': average,
    'underperform': _.chain(freelancers)
      .filter(
        function isUnderperforming(freelancer) {
          return freelancer.income <= average;
        }
      )
      .sortBy('income'),
    'overperform': _.chain(freelancers)
      .filter(
        function isOverperforming(freelancer) {
          return freelancer.income > average;
        }
      )
      .sortBy('income')
  };
};
