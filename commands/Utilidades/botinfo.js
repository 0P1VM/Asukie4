const Discord = require("discord.js");
const cpuStat = require("cpu-stat");
const os = require('os')
const moment = require("moment")
const c = require('../config.json');
const db = require('quick.db')

moment.locale('pt-BR')

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

    var linguagem = ('[JavaScript](https://www.javascript.com/)')
    var utilizando = ('[Node.js](https://nodejs.org/en/)')
    var livraria = ('[Discord.js](https://discord.js.org/#/)')
    var host = ('[DisCloud](https://discloudbot.com/)')
    var adicioneeu = ('[Clique Aqui](https://discord.com/api/oauth2/authorize?client_id=749044223692767302&permissions=8&scope=bot)')
    var suporte = ('[Clique Aqui](https://discord.gg/n5eNazJ)')
    var dev = "<@!719944880800923690>"
    var dev1 = "<@!268403900355313674>"

    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if(horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
 
     if(dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
 
     if(week > 0){ 
         uptime += `${week} week, `;
     }
 
     if(minutos > 60){ 
         minutos = 0;
     }
 
     uptime += `\`${horas}h ${minutos}m ${segundos}s\``;

              cpuStat.usagePercent(function(err, percent, seconds) {
              

    let embed = new Discord.MessageEmbed()

   .setColor('#0f4bff')
   .setAuthor(`Asukie™ | Botinfo`, client.user.displayAvatarURL())
   .setDescription(`Olá ${message.author} eu sou a ${client.user.username}, minha idade é um mistério para todos, mas já vi vários usuários criando hipóteses! Fui desenvolvido para ajudar em seu servidor, tenho sistemas de economia, moderação, entretenimento e segurança. Para saber mais sobre mim, olhe abaixo:`)
   .addField(`<:it:761067994486800415> **| Informações Gerais:**`, `> Programadores: ${dev1} & ${dev}\n` +
   `> Data de criação: \`${moment(client.user.createdAt).format('LL')}\`\n` +
   `> Data de entrada: \`${moment(client.user.joinedAt).format('LL')}\``)
   .addField(`<:ets:761068291941990400> **| Estatísticas:**`, `> Servidores: \`${client.guilds.cache.size}\`\n` +
   `> Total de canais: \`${client.channels.cache.size}\`\n` +
   `> Quantia de usuários: \`${client.users.cache.size}\``)
   .addField(`<:pgm:761068488424161351> **| Informações Técnicas:**`, `<:BlueSeta_:765293754637877268> Linguagem: **${linguagem}**\n` +
   `<:BlueSeta_:765293754637877268> Hospedagem: **${host}**\n` +
   `<:BlueSeta_:765293754637877268> Documentação: **${livraria}**\n` +
   `\n<:BlueSeta_:765293754637877268> **Me adicione: ${adicioneeu}**\n` +
   `<:BlueSeta_:765293754637877268> **Servidor Suporte: ${suporte}**`) 
   .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770328271702589510/AsukieBotinfo.png') 
   .setImage('https://i.imgur.com/yCNblD0.png')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  
   message.channel.send(embed).then(m => {
m.delete({timeout: 25000})
})

            })
           }
      
exports.help = {
    name: 'botinfo',
    aliases: ['info', 'infobot', 'infos']
}