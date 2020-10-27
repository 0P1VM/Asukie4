const Discord = require("discord.js");
const c = require("../../config.json");
const db = require("quick.db");

module.exports = {
	name: 'unban',
	aliases: ['desbanir', 'despunir'],
  run: async (client, message, args) => {
message.delete();

 let aliases = new Discord.MessageEmbed()
.setAuthor(`Comando inválido | ${client.user.username}`, 'https://images-ext-1.discordapp.net/external/68qa_JhFyKLs4CPQn5ZI3ECElC2W-jjeJGh5DxtOrgw/%3Fv%3D1/https/cdn.discordapp.com/emojis/766406396337193020.png?width=104&height=104')
.setDescription(`<:SetaZu:765288356913086484> Comando: **${c.prefix}unban**\n` +
`<:SetaZu:765288356913086484> Exemplo: **${c.prefix}unban** \`752954404986159275\`\n` +
`<:AsukieSeta0:770338265969459201> Aliases: **${c.prefix}desbanir**\n` +
`ㅤ\n` +
`<:SetaZu:765288356913086484> **Descrição:**\n` +
`Utilize para desbanir um usuário.`)
.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
.setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setColor('#0f4bff')
  let perm = new Discord.MessageEmbed()
    .setDescription(
      `<a:Asukie_Errado:767937012287537163> **| Você não tem permissão para desbanir este usuário.**`
    )
    .setColor(`#0f4bff`)
    .setFooter(
      `Requisitado: ${message.author.username}`,
      message.author.displayAvatarURL({ dynamic: true })
    );

  let tu = new Discord.MessageEmbed()
    .setDescription(
      `<a:Asukie_Errado:767937012287537163> **| Você está tentando se desbanir, isto é impossível, bobinho. <:Asukie_Aviso2:769708058023690250>**`
    )
    .setColor(`#0f4bff`)
    .setFooter(
      `Requisitado: ${message.author.username}`,
      message.author.displayAvatarURL({ dynamic: true })
    );


if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `<a:Bnao:746212123901820929> **|** Desculpe, ${message.author}. É necessária a permissão de **BAN_MEMBERS** para executar este comando!`
    );
 if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `<a:Bnao:746212123901820929> **|** Oops! eu não tenho a permissão de **BAN_MEMBERS**, portanto não posso executar esta ação!`
    );

let unkn = new Discord.MessageEmbed()
.setDescription(`<a:Asukie_Errado:767937012287537163> **| O usuário mencionado não foi encontrado.**`)
.setColor('#0f4bff')
.setFooter('Requisitado:' + message.author.username, message.author.displayAvatarURL({dynamic: true}))
     var membro;     
      if (message.mentions.members.size > 0) {
        if (/<@!?[\d]{18}>/.test(args[0]) && args[0].length <= 22) {
            membro = message.mentions.members.first();
        }
    } else if (/[\d]{18}/.test(args[0]) && args[0].length === 18) {
        membro = message.guild.members.cache.get(args[0]) || args[0];
    } else {
       message.channel.send(aliases)
      .then(m => {
        m.delete({ timeout: 21000 });
      });
        return 0;
    }
    let banido = await message.guild.fetchBans();
    membro = banido.get(membro);
    if (!membro) {
        return message.reply("o usuário que você mencionou não está banido!")
.then(m =>{
m.delete({timeout: 15000})
})
.catch(()=>{});
    }
 
    if (membro === message.member)
    return message.channel.send(tu).then(m => {
      m.delete({ timeout: 9000 });
    });

        if (membro.id === client.user.id) {
            message.channel.send('<:Asukie_atencao:766406396337193020> **|** Você não pode utilizar este comando em mim.').then(m => {
      m.delete({ timeout: 9000 });
    });
            return 0;
        }


      
}
}