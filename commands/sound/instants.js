const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const streamin = require('streamin');
const cheerio = require('cheerio');

const requester = require('../../util/requester.js');
const baseURL = 'https://www.myinstants.com';
let run = false;

module.exports = class InstantsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'instants',
            group: 'sound',
            memberName: 'instants',
            description: 'instants a command too'
        });
    }
    async run(msg, args){
        if (run) {
            return msg.reply('Espere um pouco amiguinho, estou atendendo outra chamada...');
        } else {
            run = true;
            msg.reply('estou procurando por algum som legal no My Instants...').then((message) => {
                const url = encodeURI(`${baseURL}/search/?name=${args}`);
                requester.getHtml(url, (err, body) => {
                    if (err) {
                        run = false;
                        message.delete();
                        return msg.reply('deu ruim, essa busca não deu certo, segue o erro...\n\n' + err);
                    } else {
                        const $ = cheerio.load(body);
                        const instants = $('.instant .small-button');
                        if (!instants || !instants[0] || 
                            !instants[0].attribs || !instants[0].attribs.onmousedown) {
                            console.log(instants);
                            message.delete();
                            run = false;
                            return msg.reply('poxa, não encontrei nada :( tenta outro termo de busca.');
                        }
                        let mp3URL = instants[0].attribs.onmousedown;
                        mp3URL = encodeURI(baseURL + mp3URL.replace('play(\'', '').replace('\')', ''));
                        const stream = streamin(mp3URL);
                        const channels = msg.guild.channels.filter(channel => channel.name === 'Geral' && channel.type === 'voice' );
                        const voiceChannel = channels.values().next().value;
                        voiceChannel.join().then(connection => {
                            message.delete();
                            const dispatcher = connection.playStream(stream);
                            dispatcher.on('end', () =>{
                                voiceChannel.leave();
                                run = false;
                            })
                        }).catch(() => {
                            run = false;
                        });
                    }
                });
            });
        }
    }

};