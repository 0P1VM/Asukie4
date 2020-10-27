const Discord = require('discord.js')
const { parse } = require('twemoji-parser')
const c = require('../../config.json')
const db = require('quick.db')

module.exports = {
	name: 'emoji',
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
      
     return message.channel.send(mnt)
      
    } 
  
   const emoji = args[0];
   if (!emoji) return message.channel.send(`<a:errado:753245066965024871> **|** Coloque o emoji após o comando. **ex:** \`${c.prefix}emoji <emoji> `);

   let custom = Discord.Util.parseEmoji(emoji);

   if (custom.id) {
      const embed = new Discord.MessageEmbed()
         .setAuthor(`Asukie™`, 'https://cdn.discordapp.com/emojis/760949427648725022.gif?v=1')
         .setDescription(`[Download](https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"})`)
         .setColor("#0f4bff")
         .setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`)
         .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
      return message.channel.send(embed);
   } else {
      let parsed = parse(emoji, { assetType: "png" });
      if (!parsed[0]) return message.channel.send("<a:errado:753245066965024871> **|** Ocorreu algum erro, contacte meu suporte.");
      const embed = new Discord.MessageEmbed()
         .setAuthor(`Asukie™`, 'https://cdn.discordapp.com/emojis/760949427648725022.gif?v=1')
         .setDescription(`[Download](${parsed[0].url})`)
         .setColor("#0f4bff")
         .setImage(parsed[0].url)
         .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
      return message.channel.send(embed);
   }
}
}