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
    const minWind = stationAnalytics.getMinWind(station);
    const weatherCodes = stationAnalytics.getWeatherCodes(station);
    const minPressure = stationAnalytics.getMinPressure(station);
    
    
    const viewData = {
      title: 'Station',
      station: stationStore.getStation(stationId),
      minTemp: minTemp,
      minWind: minWind,
      weatherCodes: weatherCodes,
      minPressure: minPressure
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