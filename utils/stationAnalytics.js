"use strict";

const stationAnalytics = {
  
  getWeatherCodes(code) {
    switch (code) {
        case 100:
            return "Clear";
        case 200:
            return "Partial Clouds";
        case 300:
            return "Cloudy";
        case 400:
            return "Light Showers";
        case 500:
            return "Heavy Showers";
        case 600:
            return "Rain";
        case 700:
            return "Snow";
        case 800:
            return "Thunder";
        default:
            return "Code Error";
    }
  },
  
  getLatestreading(station) {
    let latestReading = null;
    if (station.readings.length > 0) {
      latestReading = station.readings[station.readings.length - 1];
    }
    return latestReading;
  },
  
  getWindDirection(station) {
    let windDirection = null;
    if (station.readings.length > 0) {
      windDirection = station.readings[station.readings.length - 1];
    }
    return windDirection
  },
  
  
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
  
  
  getMaxWind(station) {
    let maxWind = null;
    if (station.readings.length > 0) {
      maxWind = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed > maxWind.windSpeed) {
          maxWind = station.readings[i];
        }
      }
    }
    return maxWind;
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
  
  
  getMaxTemp(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature > maxTemp.temperature) {
          maxTemp = station.readings[i];
        }
      }
    }
    return maxTemp;
  },
  
  
  getMinPressure(station) {
    let minPressure = null;
    if (station.readings.length > 0 ) {
      minPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].pressure < minPressure.pressure) {
          minPressure = station.pressure[i];
        }
      }
    }
    return minPressure;
  },
  
  getMaxPressure(station) {
    let maxPressure = null;
    if (station.readings.length > 0) {
      maxPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].pressure > maxPressure.pressure) {
          maxPressure = station.readings[i];
        }
      }
    }
    return maxPressure;
  }
  
};

module.exports = stationAnalytics;