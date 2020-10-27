const Discord = require('discord.js')
const c = require('../config.json')
const db = require('quick.db')

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
      
     return message.channel.send(mnt).then(m => {
m.delete({timeout: 20000})
})
      
    } 

    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send('<a:Asukie_Errado:767937012287537163> **|** Descreva a sugestão. [**Aviso:** \`Não abuse do comando ou será colocado na BlackList\`]').then(m => {
m.delete({timeout: 20000})
})
        return undefined;
    }

    const embed = new Discord.MessageEmbed()
        .setAuthor(`Asukie™ | Sugestão`)
       .setColor("#0f4bff")
        .addField("Usuário", `${message.author}`)
       .addField("Sugestão", `${mensg}`)
       .addField("Usuário ID", `\`${message.author.id}\``)
       .addField("Servidor ID", `\`${message.guild.id}\``)
        .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/770482302866292806/AsukieSugestao.png")
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
    client.channels.cache.get(`769695709250191390`).send(embed)
        .then(function (msg) {
            msg.react("✅");
            msg.react("❌"); 
            message.channel.send(`<a:Asukie_Certo:766437760381878282> **|** Sua sugestão foi enviada!`).then(m => {
    m.delete({timeout : 7000})
    })
        }).catch(function (error) {
            console.log(error);
        });
}
exports.help = {
    name: 'sugestao',
    aliases: ['sugestão', 'sugerir', 'suggest']
}