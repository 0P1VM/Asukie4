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

    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('<a:errado:753245066965024871> **|** Cite o nick de alguma conta criada do Minecraft, e consiga a cabeça.')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Nickname: ${args[0]}`)
        .setDescription(`<:ModulE:762729478757023834> **[Clique Aqui](https://mc-heads.net/head/${args[0]})**`)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setColor('#0f4bff')
        
    message.channel.send(embed)
}

exports.help = {
    name: 'mchead',
    aliases: ['head']
}