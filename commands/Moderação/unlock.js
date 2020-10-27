const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
	name: 'unlock',
	aliases: ['destrancar', 'desbloquear'],
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
m.delete({timeout: 20000})
})
      
    } 

  if (!message.guild.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`> <a:errado:753245066965024871> **|** Oops! Eu não tenho a permissão para \`Gerenciar Canais\``).then(m => {
    m.delete({timeout : 7000})
    });
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`> <a:errado:753245066965024871> **|** Oops! Você não tem a permissão de \`Gerenciar Canais\``).then(m => {
    m.delete({timeout : 7000})
    });

let a1 = new Discord.MessageEmbed()
.setDescription(`**Este canal foi desbloqueado por ${message.author}.**`)
.setColor("#0f4bff")
.setFooter(`${message.guild.name}`, message.guild.iconURL())
.setTimestamp();
      var unlock = message.channel.updateOverwrite(message.guild.roles.everyone, {SEND_MESSAGES: true})
                 message.channel.send(a1).then(m => {
    m.delete({timeout : 7000})
    });
        }
  }