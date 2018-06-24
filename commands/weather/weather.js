const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const weatherService = require('../../util/weatherService.js');

module.exports = class TempoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tempo',
            group: 'weather',
            memberName: 'tempo',
            description: 'tempo is a command'
        });
    }

    async run(msg, args) {
        msg.say('Aguarde um instante...').then((m) => {
            let locationName = args.normalize('NFD')
                        .replace(/ /g, ' ').replace(/[\u0300-\u036f]/g, "");
            weatherService.getWeather(locationName, (err, data) => {
                if (!err && data) {
                    locationName = locationName.replace(/ /g, '%20');
                    const image = "https://maps.googleapis.com/maps/api/staticmap" +
                    `?center=${locationName}` + 
                    "&zoom=12&size=600x500&maptype=roadmap" +
                    "&markers=color:red%7Clabel:A%7C-22.91,-47.06&" + 
                    "key=AIzaSyCR499bmDtG8xfdyoUQFppmBFphFhW0-ug&format=jpeg"
                    const embed = new RichEmbed()
                        .setColor('RED')
                        .setTitle(`Como está a temperatura em ${args}?`)
                        .setDescription(`A temperatura é de ${data.main.temp} °C`)
                        .setImage(image)
                        .setTimestamp();
                    
                    msg.embed(embed);
                } else {
                    console.log(err);
                    msg.say(`A cidade ${locationName} não foi encontrada. :(`);
                }
                m.delete();
            });
        })
        
    }
}