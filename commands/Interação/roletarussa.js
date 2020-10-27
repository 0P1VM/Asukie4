const Discord = require("discord.js");
const db = require('quick.db')

module.exports = {
	name: 'roletarussa',
	aliases: ['roleta', 'girar'],
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

    const random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){

        message.channel.send(`Rodou o cartucho e você... **SOBREVIVEU**! <a:AsukieFeliz:762823753456549894>`)

    }
    else{

        message.channel.send(`Rodou o cartucho e você... **MORREU**! <:AsukieCry:762822300563144705>`)
      }
}
}