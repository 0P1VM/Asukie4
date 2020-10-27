const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'invite',
	aliases: ['asukie', 'convite', 'links'],
  run: async (client, message, args) => {
message.delete();

    let embed1 = new Discord.MessageEmbed()
    .setColor('#0f4bff')
    .setAuthor(`${client.user.username} | Invite`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`<:Asukie_hmm2:767176269375864833> Olá ${message.author}, se você utilizou este comando é por que está interessado(a) em meus comandos, a baixo estará alguns links que talvez sejam úteis a você!`  )
    .addField(`Meu convite:`, `<:SetaZu:765288356913086484> [Clique aqui](https://discord.com/api/oauth2/authorize?client_id=749044223692767302&permissions=8&scope=bot)`)
    .addField(`Servidor de suporte:`, `<:SetaZu:765288356913086484> [Clique aqui](https://discord.gg/n5eNazJ)`)
    .addField(`Vote em mim:`, `<:SetaZu:765288356913086484> [Clique aqui](https://top.gg/bot/749044223692767302)`)
    .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/770073582595604500/AsukieInvite.png")
   .setFooter('Requisitado: ' + message.author.username, message.author.displayAvatarURL({dynamic: true}))
    message.channel.send(embed1).then(m => {
m.delete({timeout: 25000})
})
}
}