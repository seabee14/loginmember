'use strict';

const logger = require('../utils/logger');
const stationStore = require('../models/station-store.js');
const stationAnalytics = require('../utils/stationAnalytics.js')
const uuid = require('uuid');

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug('Station id = ', + stationId);
    
    const station = stationStore.getStation(stationId);
    const minTemp = stationAnalytics.getMinTemp(station);
    const maxTemp = stationAnalytics.getMaxTemp(station);
    const minWind = stationAnalytics.getMinWind(station);
    const maxWind = stationAnalytics.getMaxWind(station);
    const minPressure = stationAnalytics.getMinPressure(station);
    const maxPressure = stationAnalytics.getMaxPressure(station);
    const latestReading = stationAnalytics.getLatestreading(station);
    const weatherCodes = stationAnalytics.getWeatherCodes(latestReading.code);
    const windDirection = stationAnalytics.getWindDirection(station);
    const windSpeed = stationAnalytics.getWindSpeed(station);
    
    
    if (station.windSpeed <= 1) {
            station.beaufort = "0bft";
        } else if (station.windSpeed > 1 && station.windSpeed <= 5) {
            station.beaufort = "1bft";
        } else if (station.windSpeed > 5 && station.windSpeed <= 11) {
            station.beaufort = "2bft";
        } else if (station.windSpeed > 11 && station.windSpeed <= 19) {
            station.beaufort = "3bft";
        } else if (station.windSpeed > 19 && station.windSpeed <= 28) {
            station.beaufort = "4bft";
        } else if (station.windSpeed > 28 && station.windSpeed <= 38) {
            station.beaufort = "5bft";
        } else if (station.windSpeed > 38 && station.windSpeed <= 49) {
            station.beaufort = "6bft";
        } else if (station.windSpeed > 49 && station.windSpeed <= 61) {
            station.beaufort = "7bft";
        } else if (station.windSpeed > 61 && station.windSpeed <= 74) {
            station.beaufort = "8bft";
        } else if (station.windSpeed > 74 && station.windSpeed <= 88) {
            station.beaufort = "9bft";
        } else if (station.windSpeed > 88 && station.windSpeed <= 102) {
            station.beaufort = "10bft";
        } else if (station.windSpeed > 102 && station.windSpeed <= 117) {
            station.beaufort = "11bft";
        }

    
    
    const viewData = {
      title: 'Station',
      station: stationStore.getStation(stationId),
      latestReading: latestReading,
      minTemp: minTemp,
      minWind: minWind,
      weatherCodes: weatherCodes,
      minPressure: minPressure,
      maxTemp: maxTemp,
      maxPressure: maxPressure,
      maxWind: maxWind,
      weatherCodes: weatherCodes,
      windDirection: windDirection,
      windSpeed: windSpeed,
      beaufort: beaufort
    };
    response.render('station', viewData);
  },
  
  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temperature: request.body.temperature,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
    };
    stationStore.addReading(stationId, newReading);
    response.redirect('/station/' + stationId);
  },
  
  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect('/station/' + stationId);
  },
};

module.exports = station;