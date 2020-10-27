const Discord = require("discord.js");
const imdb = require("imdb-api");
const db = require('quick.db')

module.exports = {
  name: "serfil",
  aliases: ['filme', 'serie'],
  run: async (client, message, args) => {
    
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
    
    message.delete();

    if(!args.length) {
      return message.channel.send("<a:errado:753245066965024871> **|** Escreva o nome de alguma \`Série/Filme\` após o comando.")
    }
    
    const imob = new imdb.Client({apiKey: "5e36f0db"}) //You need to paste you imdb api
    
    let movie = await imob.get({'name': args.join(" ")})
    
    let embed = new Discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor("#0f4bff")
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    .addField("Avaliação", movie.rating, true)
    .addField("País", movie.country, true)
    .addField("Linguagem", movie.languages, true)
    .addField("Tipo", movie.type, true)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    
    
    message.channel.send(embed)
    
    
    
  }

}