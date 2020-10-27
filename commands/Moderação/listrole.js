const Discord = require('discord.js');
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
        const roles = new Discord.MessageEmbed()
        .setTitle(`Asukie™ | ListRole`)//${message.guild.name}
        .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/770321424744972349/ListRoleAsukei.png")
        .setDescription(message.guild.roles.cache.map(r => `${r}`).join(", "))
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setColor("#0f4bff")
        message.channel.send(roles).then(m => {
        //await message.channel.send(roles).then(m => {
//m.delete({timeout: 15000})
    }
                                               )}