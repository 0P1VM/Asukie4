const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();
const db = require('quick.db')
const c = require('../../config.json')

module.exports = {
  name: "soco",
 aliases: ['punch', 'socar'],
  run: async (client, message, args) => {
    message.delete();
   var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let mnt = new discord.MessageEmbed()

.setDescription(`**Olá, ${message.author}**\n` +
                `\nNo momento fui enviada para outra galáxia\n` + 
				`Em breve voltarei a responder por seus comandos.`)
.setThumbnail('https://i.pinimg.com/originals/91/de/b5/91deb532d34761aaf73e43c758dc5446.png')
.setColor(`#0f4bff`)
      
     return message.channel.send(mnt)
      
    } 

    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    let data = await random.getAnimeImgURL("punch");
    
    if (!user) {
return message.channel.send('<a:errado:753245066965024871> **|** Você está utilizando este comando de forma incorreta!\n' +
`> **Exemplo:** ${c.prefix}soco <@!719944880800923690>`);
}
    
const embe = new discord.MessageEmbed()
    .setImage(data)
    .setColor("#0f4bff")
    .setDescription(`${message.author} **deu um soco em** ${user} <:Soco:766473163445502002>`)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("#0f4bff")
    .setDescription(`${message.author} **deu um soco em** ${user} <a:Soco2:766473993103605800>`)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    
    await message.channel.send(embed).then(m => {
m.delete({timeout: 20000})
})
  }
}