const Discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const db = require('quick.db')
const random = new Random()

module.exports = {
  name: "Cry",
  aliases: ["chorar"],
  description: "Chorando",
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

    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    let data = await random.getAnimeImgURL("cry");
    
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} **Não chore se não eu choro também** <:AsukieCry:762822476828508161>`)
    .setImage(data)
    .setColor("#0f4bff")
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    
    message.channel.send(embed).then(m => {
m.delete({timeout: 15000})
})
}
}