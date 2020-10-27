const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db')

module.exports = {
	name: 'roleinfo',
	category: 'Info',
	description: 'Displays information about a provided role.',
	aliases: ['role', 'ri'],
	usage: 'roleinfo <role>',
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
    
		const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
		if(!role) {
			return message.channel.send(
				'<a:errado:753245066965024871> **|** Mecione um cargo ou cole o ID do cargo.',
			);
		}

		let permissions;
		if(role.permissions.toArray().length !== 0) {
			permissions = role.permissions.toArray().map(x => x.split('_').map(y => y[0] + y.slice(1).toLowerCase()).join(' ')).join(', ');
		}
		else {
			permissions = 'None';
		}
		const embed = new Discord.MessageEmbed()
			.setColor(role.hexColor)
      .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
      .setTitle("Asukie™ | RoleInfo")
      .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/770332756613398568/AsukieRoleinfo.png")
			.addField('Nome', `\`${role.name}\``, true)
		  .addField('Role ID', `\`${role.id}\``, true)
			.addField('Hex Cor', `\`${role.hexColor.toUpperCase()}\``)
			.addField('Membros', `\`${role.members.size}\``, true)
			.addField('Hoisted', `\`${role.hoist ? 'Sim' : 'Não'}\``, true)
			.addField('Menção', `\`${role.mentionable ? 'Sim' : 'Não'}\``, true)
			.addField('Criação', `\`${moment(role.createdTimestamp).format('MMMM Do YYYY, h:mm:ss')} | ${Math.floor((Date.now() - role.createdTimestamp) / 86400000)} dia(s)\``)
			.addField('Permissões', [
				`\`${permissions}\``,
			]);

		return message.channel.send(embed);
	},
};