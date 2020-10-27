const Discord = require("discord.js");
const moment = require("moment")
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
  
        function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia(s)" : " dia(s)");
    };
     let amiguinhos = message.guild.members.cache.size;
     const canais = message.guild.channels.cache;
     const usuarios = message.guild.members.cache;
     const serverinfo = new Discord.MessageEmbed()
     .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic: true}))
     .setThumbnail(message.guild.iconURL({dynamic: true}))
     .setColor("#0f4bff")
     .addFields(
    { name: `<:it:761067994486800415> ID do servidor:`, value: `${message.guild.id}`, inline: true },
    { name: `<:posse_Asukie:761376248865095700> Posse:`, value: `\`${message.guild.owner.user.tag}\`\n` +
                                                                `(${message.guild.owner.id})`, inline: true},
    { name: `<:tempo_Asukie:761377182286217216> Servidor criado há:`, value: `ㅤ${checkDays(message.channel.guild.createdAt)} e ${moment(message.guild.createdAt).format('h')}  hora(s)`}, 
    { name: `<:membros_Asukie:761659699266715668> Quantidade de membros:`, value: `ㅤ**<:online:753979848883568720> ${usuarios.filter(member => member.presence.status === 'online').size}**\n` +
    `ㅤ**<:idle:753983926917267456> ${usuarios.filter(member => member.presence.status === 'idle').size}**\n` +
    `ㅤ**<:dnd:753979743828967576> ${usuarios.filter(member => member.presence.status === 'dnd').size}**\n` +
    `ㅤ**<:SetaZu:765288356913086484> ${amiguinhos}**`, inline: true}, //nem começa eu vou tirar
   { name: `ㅤㅤ<:canais_Asukie:761661479615070248> Canais`, value: `ㅤㅤㅤ**Texto:** ${canais.filter(channel => channel.type === 'text').size}\n` +
                                                                `ㅤㅤㅤ**Voz:** ${canais.filter(channel => channel.type === 'voice').size}`, inline: true}
)

message.channel.send(serverinfo)
}
