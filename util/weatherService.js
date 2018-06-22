const requester = require('../util/requester.js');

exports.getWeather = function(location, callback) {

    const url = "http://api.openweathermap.org/data/2.5/weather" + 
        `?q=${location}&APPID=30b65de27fc7044e47e973389b2457fc` + 
        "&units=metric&lang=pt";

    requester.get(url, (err, data) => {
        callback(err, data);
    });    
    
};

module.exports = exports;