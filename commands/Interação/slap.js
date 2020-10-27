const Discord = require('discord.js');
const superagent = require('superagent')
const c = require('../../config.json')
const db = require('quick.db')

module.exports = {
	name: 'slap',
	aliases: ['tapa', 'bater'],
  run: async (client, message, args) => {
message.delete();

var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let mnt = new Discord.MessageEmbed()

.setDescription(`**Olá, ${message.author}**\n` +
                `\nNo momento fui enviada para outra galáxia\n` + 
				`Em breve voltarei a responder por seus comandos.`)
.setThumbnail('https://i.pinimg.com/originals/91/de/b5/91deb532d34761aaf73e43c758dc5446.png')
.setColor(`#0f4bff`)
      
     return message.channel.send(mnt)
      
    } 

 const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/slap`);
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.channel.send('<a:Bnao:746212123901820929> **|** Você está utilizando este comando de forma incorreta!\n' +
`> **Exemplo:** ${c.prefix}tapa <@!752954404986159275>`);
}

let avatar = message.author.displayAvatarURL({dynamic: true});
  const embe = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#0f4bff')
        .setDescription(`<a:tapa:762706444226396168> ${user} **deu um tapa em** ${message.author}`)
        .setImage(body.url)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#0f4bff')
        .setDescription(`<a:tapa:762706444226396168> ${message.author} **deu um tapa em** ${user}`)
        .setImage(body.url)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  await message.channel.send(embed).then(m => {
m.delete({timeout: 15000})
})
}
}