const schedule = require('node-schedule');
const requester = require('../util/requester.js');
const express = require('express');

const app = express();
const url = 'https://cit-bot.herokuapp.com/';

exports.initKeepAlive = function() {
    
    const server = app.listen(process.env.PORT || 5000, function () {
        const host = server.address().address;
        const port = server.address().port;
        console.log(`Server listening at ${host}:${port}`);
    });

    app.all('/', function (req, res) {
        res.status(200).send('Live.');
    });

    //Execute every 15 minutes 
    schedule.scheduleJob('*/15 * * * *', function(){
        console.log(`make request to ${url}...`);
        requester.req(url);
    });
};

module.exports = exports;