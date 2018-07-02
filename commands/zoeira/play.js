const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PenaltiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'zoeira',
            memberName: 'zoeira',
            description: 'play is a command'
        });
    }
    async run(msg, args){
        const channels = msg.guild.channels.filter(channel => channel.name === 'general' && channel.type === 'voice' );
        var voiceChannel = channels.values().next().value;
        let isReady = true;
        let connection = await voiceChannel.join();
        if(isReady && connection) {
            console.log(args);
            isReady = false;
            const audioName = matchRegex(args);
            let finish = connection.playFile(__dirname+audioName);
            finish.on('end', () =>{
                voiceChannel.leave();
                isReady = true;
            })
        }
    }

};

const regex = ['[Pp][Aa][Ii]','[Ss][Ii][Ll][Vv][Ii][Oo]', '[Pp][Rr][Aa][Çç][Aa]'];

function matchRegex(audioName){
    let value;

    for (let r of regex) {
        if(audioName.match(r)) {
            value = `/${audioName.toLowerCase()}.mp3`;
            break;
        }
    }
    return value;
}