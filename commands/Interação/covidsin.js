const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'covidsin',
	description: 'Sintomas do COVID-19',
    aliases: ['covidsintoma', 'c19sin'],
    usage: '$covidsin',
    cooldown: 5,
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
    
    let covidsin = new Discord.MessageEmbed()
    .setTitle("Sintomas COVID-19")
    .addField("Sintomas mais comuns", " Febre\n Tosse\n  Cansaço")
    .addField("Sintomas menos comuns", " Dores e desconfortos\n  Dor de garganta\n  Diarreia\n  Conjutivite\n  Dor de cabeça\n  Perda de paladar\n  Erupção cutânea na pele ou descoloração dos dedos das mãos ou dos pés")
    .addField("Sintomas graves", " Dificuldade de respirar ou falta de ar\n  Dor ou pressão no peito\n  Perda de fala ou movimento")
    .setColor('#0f4bff')
    .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770326529573257246/Asukiecovid19.png')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(covidsin)

    }
}