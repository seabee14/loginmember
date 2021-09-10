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
  
    getTempF(station) {  
    let tempF = null;
    if (station.readings.length > 0) {
      tempF = (((station.readings [station.readings.length - 1].temperature) * (9)/5) + 32);
    }
      return tempF;
  },
  
  getBeaufort(station) {
    let latestReading = null;
    let beaufort = "";
    if (station.readings.length > 0) {
      latestReading = station.readings[station.readings.length - 1];
            if (latestReading.windSpeed <= 1) {
              beaufort = "0bft";
            } else if (latestReading.windSpeed > 1 && latestReading.windSpeed <= 5) {
              beaufort = "1bft";
            }  else if (latestReading.windSpeed > 5 && latestReading.windSpeed <= 11) {
              beaufort = "2bft";
            } else if (latestReading.windSpeed > 11 && latestReading.windSpeed <= 19) {
              beaufort = "3bft";
            } else if (latestReading.windSpeed > 19 && latestReading.windSpeed <= 28) {
              beaufort = "4bft";
            } else if (latestReading.windSpeed > 28 && latestReading.windSpeed <= 38) {
              beaufort = "5bft";
            } else if (latestReading.windSpeed > 38 && latestReading.windSpeed <= 49) {
              beaufort = "6bft";
            } else if (latestReading.windSpeed > 49 && latestReading.windSpeed <= 61) {
              beaufort = "7bft";
            } else if (latestReading.windSpeed > 61 && latestReading.windSpeed <= 74) {
              beaufort = "8bft";
            } else if (latestReading.windSpeed > 74 && latestReading.windSpeed <= 88) {
              beaufort = "9bft";
            } else if (latestReading.windSpeed > 88 && latestReading.windSpeed <= 102) {
              beaufort = "10bft";
            } else if (latestReading.windSpeed > 102 && latestReading.windSpeed <= 117) {
              beaufort = "11bft";
            }
        }
    return beaufort;
  },
  
  
  getWindCompass(station) {
    let latestReading = null;
    let windCompass = "";
    if (station.readings.length > 0) {
      latestReading = station.readings[station.readings.length - 1];
      if (latestReading.windDirection > 11.25 && latestReading.windDirection <= 33.75) {
        windCompass = "North North East";
      } else if (latestReading.windDirection > 33.75 && latestReading.windDirection <= 56.25) {
        windCompass = "East North East";
      } else if (latestReading.windDirection > 56.25 && latestReading.windDirection <= 78.75) {
        windCompass = "East";
      } else if (latestReading.windDirection > 78.75 && latestReading.windDirection <= 101.25) {
        windCompass = "East South East";
      } else if (latestReading.windDirection > 101.25 && latestReading.windDirection <= 123.75) {
        windCompass = "East South East";
      } else if (latestReading.windDirection > 123.75 && latestReading.windDirection <= 146.25) {
        windCompass = "South East";
      } else if (latestReading.windDirection > 146.25 && latestReading.windDirection <= 168.75) {
        windCompass = "South South East";
      } else if (latestReading.windDirection > 168.75 && latestReading.windDirection <= 191.25) {
        windCompass = "South";
      } else if (latestReading.windDirection > 191.25 && latestReading.windDirection <= 213.75) {
        windCompass = "South South West";
      } else if (latestReading.windDirection > 213.75 && latestReading.windDirection <= 236.25) {
        windCompass = "South West";
      } else if (latestReading.windDirection > 236.25 && latestReading.windDirection <= 258.75) {
        windCompass = "West South West";
      } else if (latestReading.windDirection > 258.75 && latestReading.windDirection <= 281.25) {
        windCompass = "West";
      } else if (latestReading.windDirection > 281.25 && latestReading.windDirection <= 303.75) {
        windCompass = "West North West";
      } else if (latestReading.windDirection > 303.75 && latestReading.windDirection <= 326.25) {
        windCompass = "North West";
      } else if (latestReading.windDirection > 326.25 && latestReading.windDirection <= 348.75) {
        windCompass = "North North West";
      } else {
        windCompass = "North";
      }
    }
    return windCompass;
  },
  
  
  getWindDirection(station) {
    let windDirection = null;
    if (station.readings.length > 0) {
      windDirection = station.readings[station.readings.length - 1];
    }
    return windDirection
  },
  
  getWindSpeed(station) {
    let windSpeed = null;
    if (station.readings.length > 0) {
      windSpeed = station.readings[station.readings.length - 1];
    }
    return windSpeed;
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
          minPressure = station.readings[i];
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