const Discord = require("discord.js");
const c = require('../config.json');
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

    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')

  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Pergunte para mim, a mais sábia!*`)
  .addField(`:hammer: | **Uso**`, `\`${c.prefix}duvida <dúvida>\``, true)
  .addField(`:book: | **Exemplo**`, `\`${c.prefix}duvida Sou fofinha? :3\``, true)
  .addField(`:bookmark: | **Permissão**`, `\`Nenhuma\``)
  .setColor('#0f4bff')
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    var replies = ["Sim", "Não", "Talvez", "Quem sabe...", "Claro", "Se pá", "Jamais", "Nunca", "óbvio", "Você sabe", "Sei lá", "Se você não sabe imagina eu", "Pergunta no posto Ipiranga"];
    var result = Math.floor((Math.random() * replies.length));
    
    var duvida = args.slice(0).join(" ");
    if (!duvida) return message.channel.send(erro)
  
    let embed = new Discord.MessageEmbed()
    
    .setTitle('Asukie™ | Dúvida')
    .addField(`**Dúvida**`, `${duvida}`)
    .addField(`Resposta`, `${replies [result]}`)
    .setColor('#0f4bff')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770693599830212659/AsukieDuvida.png')
    
    message.channel.send(embed)
}

exports.help = {
    name: 'duvida',
    aliases: ['pergunta', 'dúvida']
}