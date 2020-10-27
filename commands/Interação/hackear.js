const Discord = require('discord.js'); 
const c = require('../../config.json')
const time = ""
const db = require('quick.db')

module.exports = {
	name: 'hackear',
	aliases: ['rakerman', 'hackerman'],
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

  var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!membro) return message.channel.send(`<a:errado:753245066965024871> **|** Mencione um usuário e um motivo válido!`);
  if (membro === message.member) return message.channel.send(`<a:errado:753245066965024871> **|** Você não pode hackear você mesmo!`);
  if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send(`<a:errado:753245066965024871> **|** Eu não tenho a permissão de **EMBED_LINKS**!`);

    var exemplos = ["Quem é aquele admin gostoso? Arruma o zap dele pra mim ai", "Não vai dar... Precisamos terminar...", "PUBG tá muito difícil", "Queria uma lolizinha :(", "Vai com calma que é minha primeira vez tá?", "Traveco é mó gostoso", "Tudo bem, mas agora eu sou lesbica", "Você tá muito linda hoje", "Vontade de uébi namorar com você", "Asukie muito Linda", "Te amo... Fofo...", "Você aceitaria namorar comigo Jacinto?", "Eu gosto de Você Sábia?... canal muito bom rs", "Sim estou com AIDS, foi o Jacinto que me passou :("]; 
	var conexao = ["São Paulo", "Bahia", "Amazonas", "Rio de Janeiro", "Russia", "Lisboa", "Brasília", "Salvador", "Pará", "Pernambuco", "Minas Gerais", "Rio Grande do Sul", "Paraíba", "Bahia", "Acre", "Alemanha", "Portugal", "Estados Unidos", "Cuba", "Senegal", "África do Sul", "Haiti", "Angola", "Canadá"]; 
    var resultado = Math.floor((Math.random() * exemplos.length)); 
	var resultado1 = Math.floor((Math.random() * conexao.length)); 
  
    let espere = new Discord.MessageEmbed()
    .setDescription(`<a:hackerman:761838986976034827> Entrando em conexão com o servidor... \`(1/2)\``)	
	.setImage(`https://www.imperva.com/blog/wp-content/uploads/sites/9/2016/12/ddos-spoffed-ips.gif`)
   .setColor('#0f4bff')
	
	let espere1 = new Discord.MessageEmbed()
    .setDescription(`<a:hackerman:761838986976034827> Invadindo o sistema... \`(2/2)\``)	
	.setImage(`https://cdn.lowgif.com/small/1c35984a3b1d962a-hacking-gif-tumblr.gif`)
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Anonymous Hacking`, 'https://media.discordapp.net/attachments/670860111958376470/726250391380951040/9879_hackerman.gif')
    .setColor('#0f4bff')
    .addFields(
	{ name: `Última Mensagem:`, value: `\`${exemplos [resultado]}\``, inline: true },
	{ name: `Última Conexão com o Discord:`, value: `\`${conexao [resultado1]}\``, inline: true},
	{ name: `Usuário:`, value: `\`${membro.user.username}\``},
	{ name: `ID:`, value: `\`${membro.id}\``, inline: true},
	)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setThumbnail('https://i.gifer.com/DiXw.gif')   
message.channel.send(espere)
  .then((msg) => {
    setTimeout(function() {
    msg.edit(espere1);
msg.delete({ timeout: 1000 })
msg.channel.send(embed)
  }, 1000)}).then(m => {
m.delete({timeout: 15000})
})
}
}