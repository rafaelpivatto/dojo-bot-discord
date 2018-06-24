const schedule = require('node-schedule');
const { RichEmbed } = require('discord.js');

exports.jobAlertWorkLog = function(client) {
    
    var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [new schedule.Range(1, 5)];
    rule.hour = 11; //11 in UTC - 8 in GMT-3
    rule.minute = 0;
    
    var j = schedule.scheduleJob(rule, function(){
        const channel = client.channels.find('name', 'geral');
        if (channel) {
            const embed = new RichEmbed()
                .setColor('RED')
                .setTitle('Apontamento...')
                .setDescription('Todo mundo lembrou de apontar as horas de ontem no jira???')
                .setImage('https://marketplace.topdesk.com/wp-content/uploads/2018/01/JIRA.jpg')
                .setFooter('Olha o chocolate aí....')
                .setTimestamp();

            channel.send('@everyone', {embed});
        }
    });
};

module.exports = exports;
