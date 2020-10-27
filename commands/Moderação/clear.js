const Discord = require('discord.js')
const c = require('../../config.json')
const db = require('quick.db')

module.exports = {
	name: 'clear',
	aliases: ['limpar', 'clean'],
  run: async (client, message, args) => {

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

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Você precisa da permissão de **GERENCIAR MENSAGENS** para executar este comando`); 
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Eu não tenho permissão para apagar mensagens nesse servidor.`); 
    let clean = args.join(''); 

    if(isNaN(clean)) return message.channel.send(`Digite um número de mensagens para apagar`)
 if (!message.author) return message.channel.send(`<a:errorx:753355949279936553> | ${message.author} utilize o comando.\n` +
  `> **Exemplo**: ${c.prefix}clear <numero>`)
    if (clean < 1 || clean > 200) return message.channel.send(`<a:errorx:753355949279936553> | ${message.author} utilize o comando.\n` +
  `> **Exemplo**: ${c.prefix}clear <numero>`)

    try { 
        message.channel.bulkDelete(clean)
        
        let embed = new Discord.MessageEmbed()

        .setDescription(`:zap: **Foram deletadas ${clean} mensagens.**`)
        .setColor("#0f4bff")


        message.channel.send(embed).then(msg => {
         if (msg.deletable) msg.delete({timeout: 8000})
        })
    } catch(e){ 
        console.log(e); 
    }
}
}