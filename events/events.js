exports.registerEvents = function(client) {
    client.on('ready', () => {
        console.log('Não vou cair!!! dessa vez.');
    });
    
    client.on('message', msg => {
        if (msg.content.includes('monitor')) {
            msg.reply('Monitor??? Mamilos!!!!');
        }
        if (msg.content.match('[Pp][ÃAãa][Oo]')) {
            if (client.user.id != msg.author.id) {
				let reply;
				if (msg.author.username != 'wgvicente') {
					let msgs = [
						"Pão! Uma deliciosa escolha para o café da manhã senhor.",
						"Acredito que ja conversamos sobre este assunto.",
						"Ahhh! você disse pão?!? Desculpe, me enganei.",
						null,
						null,
						"Você me lembrou de algo importante. Já recebeu o seu hoje?",
						null,
						"O pão enobrece o homem!",
						null,
						"Ahhh um pãozinho! Iguaria impar!",
						null
					];
					let rand = getRandomInt(10);
					reply = msgs[rand];
				} else {
					reply = "Sábio mestre! Compartilhe conosco seu conhecimento sobre esta iguaria!"
				}
				if (reply) {
					msg.reply(reply);
				}
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}