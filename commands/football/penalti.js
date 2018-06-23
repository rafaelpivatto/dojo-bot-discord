const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PenaltiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'penalti',
            group: 'football',
            memberName: 'penalti',
            description: 'Penalti is a command'
        });
    }
    async run(msg, args){
        const embed = new RichEmbed()
            .setColor('FFFF00')
            .setTimestamp()
            .setTitle('Foi pênalti Arnaldo!!')
            .setDescription('A regra é clara, esse árbitro tá de brincadeira')
            .setImage('https://media1.tenor.com/images/e3306470b23c4c5e32d535017746c93f/tenor.gif')
            .setFooter('Marquezine chora');

        msg.embed(embed);
    }
}