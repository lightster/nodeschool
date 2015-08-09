'use strict';

var _ = require('lodash');

module.exports = function determineCitiesClimate(cities) {
  var hot = [];
  var warm = [];

  function checkTemps(temp) {
    return temp > 19;
  }

  _.forEach(cities, function determineCityClimate(temps, cityName) {
    if (_.every(temps, checkTemps)) {
      hot.push(cityName);
    } else if (_.some(temps, checkTemps)) {
      warm.push(cityName);
    }
  });

  return {
    hot: hot,
    warm: warm
  };
};
