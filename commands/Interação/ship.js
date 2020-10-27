const Discord = require('discord.js');
const c = require('../config.json')
const db = require('quick.db')

module.exports.run = async(client, message, args) => {
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
  
  let erro = new Discord.MessageEmbed()
  
  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Escreva uma mensagem de saida*`)
  .addField(`:hammer: | **Uso**`, `\`${c.prefix}ship <@user> <@user2>\``, true)
  .addField(`:book: | **Exemplo**`, `\`${c.prefix}ship @Asukie @AsukieHomi\``, true)
  .addField(`:bookmark: | **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: | **Alternativas**`, `\`Nenhuma\``)
  .setColor('#0f4bff')
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  
    const love = [
        "**0%** || :broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart: ||",
        "**10%** || :heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||",
        "**20%** || :heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||",
        "**30%** || :heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||",
        "**40%** || :heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||",
        "**50%** || :heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||",
        "**60%** || :heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: ||",
        "**69%** || :eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant: ||",
        "**70%** || :heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart: ||",
        "**80%** || :heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart: || ",
        "**90%** || :heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart: ||",
        "**100%** || :heart::heart::heart::heart::heart::heart::heart::heart::heart::heart: ||",
];
                        let user = message.mentions.users.first()
                        if(!user) return message.channel.send(erro);
                        let user2 = message.mentions.users.last()
                        if(!user2) return message.channel.send(erro);
                      
                        var author = message.member.nickname
                        var embed = new Discord.MessageEmbed()
                                .setThumbnail("https://media.discordapp.net/attachments/427168044528173056/436659295598280725/meterheart.png?width=344&height=344")
                                .setDescription(" " + " " + "       __**:heartbeat::bow_and_arrow: MATCHMAKING :bow_and_arrow::heartbeat:**__" + "" + `\n\n          ` + user.username + "" + "" + "\n + \n" + user2.username + "" + "\n\n" + love[Math.floor(Math.random() * love.length)])
                                .setColor('#0f4bff')
                                .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
                                
                                message.channel.send(embed).then(m => {
m.delete({timeout: 20000})
})
}
