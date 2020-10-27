const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (message.deletable) message.delete()

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

    let servericon = new Discord.MessageEmbed()

    .setAuthor(`Asukie™`, 'https://images-ext-1.discordapp.net/external/V2KiK_UQ9rHOl6-78oDKWTC1XsYOy_qQR5tjojlUxng/%3Fv%3D1/https/cdn.discordapp.com/emojis/760949427648725022.gif')
    .setDescription(`**${message.guild.name}**`)
    .setImage(message.guild.iconURL({size: 1024, dynamic: true}))
    .setColor('#0f4bff')
   .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

    message.channel.send(servericon);

}

exports.help = {
    name: 'servericon',
    aliases: ['ícone', 'icon']
}