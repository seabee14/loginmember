"use strict";

const stationAnalytics = {
  
getMinTemp(station) {
    let minTemp = null;
    if (station.readings.length > 0) {
      minTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature < minTemp.temperature) {
          minTemp = station.readings[i];
        }
      }
    }
    return minTemp;
  }
  
  getMinWind(station) {
    let minWind = null;
    if (station.readings.length > 0)
  }
  
};

module.exports = stationAnalytics;