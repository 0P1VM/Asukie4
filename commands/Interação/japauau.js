const Jimp = require('jimp')
const c = require('../../config.json')
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
	name: 'japauau',
	aliases: ['japa'],
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
            message.channel.send('<a:errado:753245066965024871> **|** Você não escreveu nada.')
        } else {
            if (message.content.split(' ').slice(1).join(' ').length > 20) {
                message.channel.send('<a:errado:753245066965024871> **|** Você ultrapassou o limite de 20 caracteres. Você não quer uma edição feia ne?')
            } else {
                    var authorMessage = message
                    message.channel.send('<a:loading:753391174202425364> **|** Processando...').then(m => {m.delete({timeout: 3000})
                        Jimp.read(`https://cdn.discordapp.com/attachments/506173362972917790/750511457682063450/2244.png`, function (err, image) {
                            if (err) message.channel.send('<a:errado:753245066965024871> **|** Ocorreu um erro ao criar a imagem.')
                            Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                                image.print(font, 250, 95, authorMessage.content.split(' ').slice(1).join(' '), 650)
                                var aguardeMessage = message
                                image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                    const attachment = new Discord.MessageAttachment(buffer, 'test.png')
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