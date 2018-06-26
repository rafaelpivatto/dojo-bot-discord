require('dotenv').config();
const Commando = require('discord.js-commando');
const events = require('./events/events.js');
const alertWorkLog = require('./jobs/alertWorkLog.js');
const michaelDouglas = require('./jobs/michaelDouglas.js');

const client = new Commando.Client({
    unknownCommandResponse: false
});

client.registry.registerGroups([
    {id: 'football'},
    {id: 'weather'},
    {id: 'zoeira'}
])
.registerCommandsIn(__dirname + '/commands');

client.login(process.env.BOT_KEY);

events.registerEvents(client);
alertWorkLog.jobAlertWorkLog(client);
michaelDouglas.initKeepAlive();
