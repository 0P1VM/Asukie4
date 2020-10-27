const Discord = require("discord.js");
const db = require('quick.db')

module.exports = {
  name: "Cocegas",
  aliases: ["tickle"],
  description: "use esse comando para fazer cocegas em alguém",
  category: "Interação",
  run: async(client, message, args) => {
message.delete()

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

    const number = Math.floor(Math.random() * 6) +1;

    message.channel.send(`<a:Dado:764302636349915196> **|** O dado que você jogou caiu em: \`${number}\``)

}
}