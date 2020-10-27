const Discord = require("discord.js"); 
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

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  

  let embed = new Discord.MessageEmbed() 
    .setColor('#0f4bff')
    .setAuthor(`Asukie™`, 'https://cdn.discordapp.com/emojis/760949427648725022.gif?v=1')
	.setDescription(`**Avatar de ${user.username}**`)
    .setImage(user.displayAvatarURL({size: 1024, dynamic: true})) 
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
 await message.channel.send(embed);

};