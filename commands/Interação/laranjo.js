const jimp = require("jimp")
const db = require("quick.db")
const Discord = require("discord.js")

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
          if (message.content.split(' ').slice(1).join(' ').length < 1) {
            message.channel.send('<a:errado:753245066965024871> **|** Você não escreveu nada.')
        } else {
            if (message.content.split(' ').slice(1).join(' ').length > 20) {
                message.channel.send('<a:errado:753245066965024871> **|** Você ultrapassou o limite de 20 caracteres. Você não quer uma edição feia ne?')
            } else {
                    var authorMessage = message
        message.channel.send('<a:loading:753391174202425364> **|** Processando...').then(m => {m.delete({timeout: 2000})
        let img = jimp.read("https://cdn.discordapp.com/attachments/554048737648050179/610011657632219147/laranjo-meme-cke.jpg")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(685, 494)
                image.print(font, 20, 30, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "laranjo.png"}]})
                })
            })
        })
    }
                                                                                         )}
        }
}
    exports.help = {
    name: 'laranjo',
    aliases: [ ]
}