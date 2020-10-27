 const Discord = require('discord.js');
var steam = require('steam-provider') //npm i steam-provider
var provider = new steam.SteamProvider();
const db = require('quick.db')

module.exports = {
	name: 'steam',
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
 
let arg = args.join(' ') //Puxa os argumentos do  usuário
if(!arg) return message.channel.send(`<a:errado:753245066965024871> **|** ${message.author}, você precisa escrever o nome de algum jogo!`) //retorna quando o usuário não coloca um jogo
provider.search(arg).then(result => { //vai mostrar o resultado
    provider.detail(result[0].id, 1, "portuguese", "pt").then(results => { //tenta mostrar o resultado em Português (Brasil)
      return message.channel.send(`<a:loading:753391174202425364> **|** Carregando...`).then(m => {    m.delete({timeout : 4000})
        let other = results.otherData //vai pegar os dados do jogo
        const embed = new Discord.MessageEmbed() //vai mostrar para o usuário todas as informações do jogo
                    .setTitle(results.name)
                    .setDescription(`\n\n**Gênero:** ${results.genres.join(', ')} \n**Plataforma:** ${other.platforms.join(', ')}\n**Características:** ${other.features.join(', ')}\n\n**Developer:** ${other.developer.join(', ')}`)
                    .setThumbnail(other.imageUrl)
                    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
                    .setColor('#0f4bff')
        message.channel.send(embed).then(m => {
m.delete({timeout: 20000})
})
              })
    })
})
}
}