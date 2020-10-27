const Discord = require('discord.js');
const superagent = require('superagent')
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
      
     return message.channel.send(mnt)
      
    } 

 const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/hug`);

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.channel.send('<a:Bnao:746212123901820929> **|** Você está utilizando este comando de forma incorreta!\n' +
`> **Exemplo:** ${c.prefix}hug <@!749044223692767302>`);
}

let avatar = message.author.displayAvatarURL({dynamic: true});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#0f4bff')
        .setDescription(`<a:Borbo:761702886996312064> ${message.author} ** Abraçou** ${user}`)
        .setImage(body.url)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  await message.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(loop);

           coletor2.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(loop);

           coletor3.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(loop);

           coletor4.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(loop);

           coletor5.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor6 = msg.createReactionCollector(loop);

           coletor6.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor7 = msg.createReactionCollector(loop);

           coletor7.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor8 = msg.createReactionCollector(loop);

           coletor8.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor9 = msg.createReactionCollector(loop);

           coletor9.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor10 = msg.createReactionCollector(loop);

           coletor10.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor11 = msg.createReactionCollector(loop);

           coletor11.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor12 = msg.createReactionCollector(loop);

           coletor12.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor13 = msg.createReactionCollector(loop);

           coletor13.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor14 = msg.createReactionCollector(loop);

           coletor14.on("collect", cp => {
msg.channel.send(`${message.author} **| Esse é o meu limite!**`)
           })
           })
           })
           })
           })
           })           
           })
           })
           })
           })
           })           
           })
           })           
           })
           })
           })
           })
           })           
           })
           })
           })
           })
           })
           })
           })
           })
}