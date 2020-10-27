const fetch = require('node-fetch');
const Discord = require('discord.js');
const db = require('quick.db')

const c = require('../config.json')

module.exports = {
    name: 'covid-19',
    aliases: ['covid'],
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

        let countries = args.join(" ");

        if(args[0] === "mundo"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Estatísticas COVID-19 mundial`)
                .addField('Casos confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)
                .setColor('#0f4bff')
                .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770326529573257246/Asukiecovid19.png')
                .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Estatísticas COVID-19, no(a) **${countries}**`)
                .addField('Caso Confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)
                .setColor('#0f4bff')
                .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770326529573257246/Asukiecovid19.png')
                .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('<a:errado:753245066965024871> **|** Esse Pais não existe ou não se encontra no meu banco de dados. \`a!convid mundo\` veja os casos mundias de Covid-19. [**Aviso:** O comando é em Inglês, então os Paises também são ex: ``Brazil, Japan`` etc]')
            })
        }
    }
}