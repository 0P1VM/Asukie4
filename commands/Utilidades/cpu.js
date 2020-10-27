const Discord = require("discord.js");
const cpuStat = require("cpu-stat");
 const os = require('os')
const db = require('quick.db')

module.exports = {
	name: 'cpu',
	aliases: ['computer', 'computação'],
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
  
              cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
                

  let embed = new Discord.MessageEmbed()
  
  .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770318897102454854/CpuAsukie.png')
  .setTitle("Asukie™ | Cpu")
  .addField("Modelo", `\`${os.cpus().map(i => `${i.model}`)[0]}\``)
  .addField("Uso", `\`${percent.toFixed(2)}%\``)
  .addField("Memória Utilizada", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``)
  .setColor('#0f4bff')
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  
  message.channel.send(embed)
      })
  }
}