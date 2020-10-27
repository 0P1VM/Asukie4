const jimp = require("jimp")
const Discord = require('discord.js')
const db = require("quick.db")
const c = require('../../config.json')

module.exports = {
	name: 'stonks',
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
      
     return message.channel.send(mnt).then(m => {
m.delete({timeout: 20000})
})
      
    } 

        if (message.content.split(' ').slice(1).join(' ').length > 20) {
            message.channel.send('<a:errado:753245066965024871> **|** Você ultrapassou o limite de 20 caracteres. Você não quer uma edição feia ne?')
      } else {
                var authorMessage = message
                message.channel.send('<a:loading:753391174202425364> **|** Processando...').then(message => {
        let img = jimp.read("https://media.discordapp.net/attachments/723135289320538152/733670552622989352/stonks-meme.png")
        if (!args[0]) return message.reply("<a:errado:753245066965024871> **|** Escreva algo para aparecer na imagem do Stonks.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
                image.resize(685, 500)
                image.print(font, 70, 80, args.join(" "), 900)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "mime_dos_stonks.png"}]}).then(m => {
m.delete({timeout: 20000})
})
                })
            })
        })
    }
                                                                                                 )}
      }
}