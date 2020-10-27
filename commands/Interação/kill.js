const Discord = require('discord.js');
const db = require('quick.db')
const c = require("../../config.json")

module.exports = {
    name: 'kill',
    aliases: ['matar'],
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

    var list = [
        'https://25.media.tumblr.com/61dacc6fa9fc1aaabb5224ed8341e760/tumblr_mt8tygAVwT1sayl13o1_500.gif',
        'https://78.media.tumblr.com/d0bb21ba12720d57a19b127ea2c84856/tumblr_n90q272eto1sijhkdo1_500.gif',
        'https://i.gifer.com/W9e.gif',
        'https://data.whicdn.com/images/232960922/original.gif',
        'https://otakufilms.files.wordpress.com/2015/02/perfect-blue.gif',
        'https://64.media.tumblr.com/f28ffdfb6744ede99f494ed7bdef2b3f/tumblr_mjcn06loMJ1s70vj3o1_500.gif',
        'https://i.pinimg.com/originals/34/11/e3/3411e389cd7f1632a805656143a8f2e2.gif',
        'https://gifimage.net/wp-content/uploads/2017/09/anime-death-gif-7.gif'  
      ];
      
      var rand = list[Math.floor(Math.random() * list.length)];
      let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
return message.channel.send('<a:Bnao:746212123901820929> **|** Você está utilizando este comando de forma incorreta!\n' +
`> **Exemplo:** ${c.prefix}kill \`<usuário>\``);
}
      
      let avatar = message.author.displayAvatarURL({format: 'png'});
        const embed = new Discord.MessageEmbed()
              .setColor('#0f4bff')
              .setDescription(`${message.author} **acaba de matar** ${user} <:ceifa:758340166229557302>`)
              .setImage(rand)
              .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        await message.channel.send(embed);
      }
  }