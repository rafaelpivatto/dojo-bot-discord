const request = require('request');

exports.get = function(url, callback) {
    
    request(url, function (error, response, body) {
        if (error) {
            callback(error);
            return;
        }
        if (response && response.statusCode != 200) {
            callback('Error on status code: ' + response.statusCode);
            return;
        }
        callback(error, JSON.parse(body));
    });
};

exports.req = function(url) {
    request(url, () => {});
};

exports.getHtml = function(url, callback) {
    
    request(url, function (error, response, body) {
        if (error) {
            callback(error);
            return;
        }
        if (response && response.statusCode != 200) {
            callback('Error on status code: ' + response.statusCode);
            return;
        }
        callback(error, body);
    });
};

module.exports = exports;
