exports.registerEvents = function(client) {
    client.on('ready', () => {
        console.log('Não vou cair!!! dessa vez.');
    });
    
    client.on('message', msg => {
        if (msg.content.includes('monitor')) {
            msg.reply('Monitor??? Mamilos!!!!');
        }
        if (msg.content.match('[Pp][ÃAãa][Oo]')) {
            if (!msg.content.includes('Desculpe, me enganei.')) {
                msg.reply('Ahhh! você disse Pão?!? Desculpe, me enganei.');
            }
        }
    });
    
    client.on('guildMemberAdd', (member) => {
        member.send('Seja bem vindo!!!');
        const channel = member.client.channels.find('name','geral');
        if (channel) {
            channel.send(`Bem vindo ${member.user.username}, ao bonde dos ousados e alegres`);
        }
    })
};

module.exports = exports;
