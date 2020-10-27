const Discord = require('discord.js');
const c = require('../config.json')
const moment = require('moment');
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
        return days + (days == 1 ? " dia" : " dias");
    };
const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const alvo = message.mentions.users.first() || message.author
const joinDiscord = moment(membro.createdAt).format('llll');
const joinServer = moment(membro.joinedAt).format('llll');
let userinfo = new Discord.MessageEmbed()
.setColor('#0f4bff')
.setAuthor('Asukie™', 'https://images-ext-1.discordapp.net/external/V2KiK_UQ9rHOl6-78oDKWTC1XsYOy_qQR5tjojlUxng/%3Fv%3D1/https/cdn.discordapp.com/emojis/760949427648725022.gif')
.addFields(
{ name: `Tag do Discord:`, value: `\`${membro.user.tag}\``, inline: true},
{ name: `ID do Discord:`, value: `\`${membro.id}\``, inline: true},
{ name: `Conta criada há:`, value: `${moment(membro.createdAt).format('LL')} (${checkDays(membro.user.createdAt)})`},
{ name: `Entrou no Servidor há:`, value: `${moment(membro.joinedAt).format('LL')} (${checkDays(message.channel.guild.joinedAt)})`}
)
.setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
.setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));



message.channel.send(userinfo).then(m => {
m.delete({timeout: 20000})
})
}