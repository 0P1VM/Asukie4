const Discord = require("discord.js");
const cpuStat = require("cpu-stat");
const os = require('os')
const moment = require("moment")
const c = require('../../config.json');
moment.locale('pt-BR')

module.exports = {
  name: "botinfo",
 aliases: ['info'],
  run: async (client, message, args) => {
    
    var linguagem = ('[JavaScript](https://www.javascript.com/)')
    var utilizando = ('[Node.js](https://nodejs.org/en/)')
    var livraria = ('[Discord.js](https://discord.js.org/#/)')
    var host = ('[DisCloud](https://discloudbot.com/)')
    var adicioneeu = ('[Clique Aqui](https://discord.com/api/oauth2/authorize?client_id=749044223692767302&permissions=8&scope=bot)')
    var suporte = ('[Clique Aqui](https://discord.gg/QcuZDqv)')
    var dev = "<@!752954404986159275>"
    var dev1 = "<@!719944880800923690>"

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

   .setColor('#8500de')
   .setAuthor(`Painel de Informações`, client.user.displayAvatarURL())
   .setDescription(`Olá ${message.author} eu sou a ${client.user.username}, minha idade é um mistério para todos, mas já vi vários usuários criando hipóteses! Fui desenvolvido para ajudar em seu servidor, tenho sistemas de economia, moderação, entretenimento e segurança. Para saber mais sobre mim, olhe abaixo:`)
   .addField(`<:it:761067994486800415> **| Informações Gerais:**`, `> Programadores: ${dev}, ${dev1}\n` +
   `> Data de criação: \`${moment(client.user.createdAt).format('LL')}\`\n` +
   `> Data de entrada: \`${moment(client.user.joinedAt).format('LL')}\``)
   .addField(`<:ets:761068291941990400> **| Estatísticas:**`, `> Servidores: \`${client.guilds.cache.size}\`\n` +
   `> Total de canais: \`${client.channels.cache.size}\`\n` +
   `> Quantia de usuários: \`${client.users.cache.size}\``)
   .addField(`<:pgm:761068488424161351> **| Informações Técnicas:**`, `<:seta1:762492762192478216> Linguagem: **${linguagem}**\n` +
   `<:seta1:762492762192478216> Hospedagem: **${host}**\n` +
   `<:seta1:762492762192478216> Documentação: **${livraria}**\n` +
   `\n<:seta1:762492762192478216> **Me adicione: ${adicioneeu}**\n` +
   `<:seta1:762492762192478216> **Servidor Suporte: ${suporte}**`) 
   .setThumbnail(`https://media.discordapp.net/attachments/760597034138075158/761074283505385492/puzzel-bot-icon.png?width=480&height=480`) 
   .setImage(`https://cdn.discordapp.com/attachments/760597034138075158/761697261788856320/22windows_banner.png`)
  
   message.channel.send(embed)

            })
           }
      
}