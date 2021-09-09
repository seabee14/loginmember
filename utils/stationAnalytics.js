"use strict";

const stationAnalytics = {
  
  getMinWind(station) {
    let minWind = null;
    if (station.readings.length > 0) {
      minWind = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed < minWind.windSpeed) {
          minWind = station.readings[i];
        }
      }
    }
    return minWind;
  },
  
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
  },
  
  getTempF(station) {
    let tempF = null;
    if (readings.size() > 0) {
            tempF = (((readings.get(readings.size() - 1).temperature) * (9) / 5) + 32);
      
  }
  
  
  
};

module.exports = stationAnalytics;