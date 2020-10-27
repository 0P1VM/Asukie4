const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
	name: 'gay',
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
      
     return message.channel.send(mnt).then(m => {
m.delete({timeout: 15000})
})
      
    } 

    let member = message.mentions.users.first();

    if (!member) member = message.author

    message.channel.send(
        new Discord.MessageEmbed()
        .setColor('#0f4bff')
        .setDescription(`${member} **Você está em dúvida? relaxa sua porcetagem é** \`${ran(0, 100)}%\` **de ser gay.** <:Asukie_Frioo:767176226694627349>`)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    ).then(m => {
m.delete({timeout: 15000})
})
   
}
}

function ran(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}