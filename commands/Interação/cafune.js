const Discord = require('discord.js');
const superagent = require('superagent')
const c = require('../config.json')
const db = require('quick.db')

exports.run = async (client, message, args) => {
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
        .get(`https://nekos.life/api/v2/img/pat`);

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.channel.send('<a:Bnao:746212123901820929> **|** Você está utilizando este comando de forma incorreta!\n' +
`> **Exemplo:** ${c.prefix}cafune <@!749044223692767302>`);
}

let avatar = message.author.displayAvatarURL({dynamic: true});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#0f4bff')
        .setDescription(`<:cafune:762803835546107916> ${message.author} **Fez cafuné em** ${user}`)
        .setImage(body.url)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  await message.channel.send(embed).then(m => {
m.delete({timeout: 15000})
})
}