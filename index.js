const Commando = require('discord.js-commando');
const Client = new Commando.Client({
    unknownCommandResponse: false
});

Client.registry.registerGroups([
    {id: 'football'}
])
.registerCommandsIn(__dirname + '/commands');

Client.login('NDYwMDg3MjE2NjAxODI1Mjgw.Dg_rIw.o8-3PWPNeY2zFbo8jOyCtM3OsdA');

Client.on('ready', () => {
    console.log('Não vou cair!!! dessa vez.');
});

Client.on('message', msg => {
    if (msg.content.includes('monitor')) {
        msg.reply('Mamilos!!!!');
    }
});

Client.on('guildMemberAdd', (member) => {
    member.send('Seja bem vindo');
    member.client.channels.find('name','geral').send(`Bem vindo ${member.user.username}, ao bonde dos ousados e alegres`);
})


//Execute every 1 minute
//schedule.scheduleJob('*/1 * * * *', () => {
//});