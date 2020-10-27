const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message) => {
message.delete();
  
    let embed1 = new Discord.MessageEmbed()
    .setColor('#0f4bff')
    .setAuthor(`${client.user.username} | Invite`, client.user.displayAvatarURL({dynamic: true}))
    .addField(`Meu convite`,`ㅤ<:SetaZu:765288356913086484> [Clique aqui](https://discord.com/api/oauth2/authorize?client_id=749044223692767302&permissions=8&scope=bot)`)
    .addField(`Meu suporte`,`ㅤ<:SetaZu:765288356913086484> [Clique aqui](https://discord.gg/n5eNazJ)`)
    .addField(`Vote em mim`,`ㅤ<:SetaZu:765288356913086484> [Clique aqui](https://top.gg/bot/749044223692767302)`)
    .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/770073582595604500/AsukieInvite.png")
   .setFooter('Requisitado: ' + message.author.username, message.author.displayAvatarURL({dynamic: true}))
    message.channel.send(embed1).then(m => {
m.delete({timeout: 25000})
})
};