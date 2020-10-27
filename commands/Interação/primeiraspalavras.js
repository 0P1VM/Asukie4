const Discord = require('discord.js')
var Jimp = require("jimp")
const db = require('quick.db')

module.exports = {
	name: 'primeiraspalavras',
	aliases: ['firstwords'],
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

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send('<a:errado:753245066965024871> **|** Escreva algo para aparecer na primeira fala do bebê.')
    } else {
        if (message.content.split(' ').slice(1).join(' ').length > 20) {
            message.channel.send('<a:errado:753245066965024871> **|** Você ultrapassou o limite de 20 caracteres. Você não quer uma edição feia ne?')
        } else {
                var authorMessage = message
                message.channel.send('<a:loading:753391174202425364> **|** Processando...').then(message => {
                    Jimp.read(`https://cdn.discordapp.com/attachments/538711394137407488/567123894956457984/tirinha_baby.png`, function (err, image) {
                        if (err) message.channel.send('<a:errado:753245066965024871> **|** Ocorreu um erro ao criar a imagem.')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                            image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })
            }
        }
    }
}