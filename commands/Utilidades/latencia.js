const Discord = require("discord.js");
const db = require('quick.db')


module.exports = {
	name: 'latencia',
	aliases: ['ping', 'ms', 'latência'],
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

    let embed = new Discord.MessageEmbed() // Aqui vai ser a primeira embed que o bot irá mostrar
    .setColor('#0f4bff')
    .setDescription(`<a:loading:753391174202425364>  Calculando... \`1/2\`\n`)
    .addField("Aguarde","Aguarde alguns segundos. <:Asukie_Blindao:764726364775251968>")
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    let embed2 = new Discord.MessageEmbed() // Aqui vai ser a segunda embed que o bot irá mostrar
    .setColor('#0f4bff')
    .setDescription(`<a:loading:753391174202425364>  Calculando... \`2/2\``)
    .addField("Aguarde","Aguarde alguns segundos. <:Asukie_Blindao:764726364775251968>")
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    const m = await message.channel.send(`Latencia?`)
    .then(botmsg => botmsg.delete({ timeout: 1}))
    let embed_ping = new Discord.MessageEmbed() // Aqui vai ser a terceira embed que o bot irá mostrar
    .setAuthor("Asukie™ | Latência", client.user.displayAvatarURL({dynamic: true}))
    .setColor('#0f4bff')
    .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/770317372308979712/LatenciaAsukie.png")
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .addField(` Latência`,[
        `\`${m.createdTimestamp - message.createdTimestamp}\` ms`])
    .addField(` Latência API`,[
        `\`${Math.round(client.ws.ping)}\` ms`])

    const msg = await message.channel.send(embed) // Aqui o bot irá mostrar a primeira embed
    setTimeout(() => { // Aqui criamos um timeout para mostrar a primeira embed com a duração de 3 segundos, para depois editar ela e mostrar a segunda embed
      msg.edit(embed2)
    }, 3000) // 1000 ms = 1s
    setTimeout(() => { // Aqui criamos um timeout para mostrar a embed final com a duração de 5 segundos
      msg.edit(embed_ping)
    }, 5000)

}
}