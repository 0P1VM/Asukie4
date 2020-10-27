const Discord = require("discord.js");
const c = require("../../config.json");
const db = require("quick.db");

module.exports = {
	name: 'ban',
	aliases: ['banir', 'punir'],
  run: async (client, message, args) => {
message.delete();

var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let mnt = new Discord.MessageEmbed()

.seAuthor(``)
.setColor(`#0f4bff`)
      
     return message.channel.send(mnt)
      
    } 
 let aliases = new Discord.MessageEmbed()
.setAuthor(`Comando inválido | ${client.user.username}`, 'https://images-ext-1.discordapp.net/external/68qa_JhFyKLs4CPQn5ZI3ECElC2W-jjeJGh5DxtOrgw/%3Fv%3D1/https/cdn.discordapp.com/emojis/766406396337193020.png?width=104&height=104')
.setDescription(`<:SetaZu:765288356913086484> Comando: **${c.prefix}ban**\n` +
`<:SetaZu:765288356913086484> Exemplo: **${c.prefix}ban **@**usuario Quebrou as regras!**\n` +
`<:BlueSeta_:765293754637877268> Aliases: **${c.prefix}punir**\n` +
`ㅤ\n` +
`<:SetaZu:765288356913086484> **Descrição:**\n` +
`Utilize para banir um usuário mencionado\n` +
`**(Necessita de confirmação).**`)
.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
.setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setColor('#0f4bff')
  let perm = new Discord.MessageEmbed()
    .setDescription(
      `<a:Asukie_Errado:767937012287537163> **| Você não tem permissão para banir este usuário.**`
    )
    .setColor(`#0f4bff`)
    .setFooter(
      `Requisitado: ${message.author.username}`,
      message.author.displayAvatarURL({ dynamic: true })
    );

  let superior = new Discord.MessageEmbed()
    .setDescription(
      `<a:Asukie_Errado:767937012287537163> **| O usuário mencionado está com cargos superiores a você.**`
    )
    .setColor(`#0f4bff`)
    .setFooter(
      `Requisitado: ${message.author.username}`,
      message.author.displayAvatarURL({ dynamic: true })
    );

if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `<a:Bnao:746212123901820929> **|** Desculpe, ${message.author}. É necessário ter a permissão de **BAN_MEMBERS** para executar este comando!`
    );
 if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `<a:Bnao:746212123901820929> **|** Oops! eu não tenho a permissão de **BAN_MEMBERS**, portanto não posso executar esta ação!`
    );
  var motivo = args.slice(1).join(" ");
  if (!motivo) motivo = "Motivo não inserido";

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
 
    if (membro === message.member)
    return message.channel.send(superior).then(m => {
      m.delete({ timeout: 9000 });
    });

        if (membro.id === message.guild.ownerID) {
            message.channel.send('<a:Asukie_Errado:767937012287537163> **|** Você não pode banir o usuário com a posse do servidor, bobinho.').then(m => {
      m.delete({ timeout: 9000 });
    });
            return 0;
        }
        if (membro.id === client.user.id) {
            message.channel.send('<:Asukie_atencao:766406396337193020> **|** Você não pode utilizar este comando em mim.').then(m => {
      m.delete({ timeout: 9000 });
    });
            return 0;
        }


        var user;
        let username = "\`User\`";
        let URL = "https://i.imgur.com/TgJXsIG.png";
        if (typeof membro !== "string") {
            user = membro;
            username = membro.tag || membro.user.tag;
        } else {
            let auditLogs = await message.guild.fetchAuditLogs({type : "MEMBER_BAN_ADD", limit : 5}).catch(console.error);
            let entries = auditLogs.entries.array();
            for (let i = 0; i < entries.length; ++i) {
                if (entries[i].executor.id !== client.user.id) continue;
                user = entries[i].target;
                username = user.tag;
                i = entries.length;
            }
        }

  let cma = new Discord.MessageEmbed()
    .setAuthor(
      `Confirme a ação a seguir:`,
      "https://cdn.discordapp.com/emojis/753354762350493796.gif?v=1"
    )
    .addField(
      `<:setamarela:736597556913504312> **Deseja realmente banir o usuário abaixo?**`,
      `ㅤ<@!${typeof membro === "string" ? membro : membro.id}> (\`${typeof membro === "string" ? membro : membro.id}\`)`
    )
    .addField(
      `<:Info_4:768643566804402276> **| Motivo inserido:**`,
      `ㅤ${motivo}`
    )
    .setColor(`#0f4bff`)
    .setFooter(
      `Requisitado: ${message.author.username}`,
      message.author.displayAvatarURL({ dynamic: true })
    );

  let confirm_msg = await message.channel.send(cma);
  confirm_msg.react("766437760381878282");
  confirm_msg.react("767937012287537163");

  let filtro = (reaction, usuario) =>
    reaction.emoji.id === "766437760381878282" &&
    usuario.id === message.author.id;
  let coletor = confirm_msg.createReactionCollector(filtro, { max: 1 });

  let membroban1 = new Discord.MessageEmbed()
    .setAuthor(
      `Membro banido | Asukie™`,
      "https://images-ext-2.discordapp.net/external/im9ATtqKCZRbYiLuwS12FRWrqjQsAnvc1gMKbYjXM64/https/cdn.discordapp.com/emojis/637125668601200640.gif"
    )
    .setThumbnail(
      `https://media.discordapp.net/attachments/618150447261417492/626945093923766284/giphy_1.gif?width=453&height=453`
    )
    .addFields(
      {
        name: "<:autorolymus:747042714725646336> **| Autor do Banimento:**",
        value:
          `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${message.author.tag}\`\n` +
          `ㅤ<:SetaZu:765288356913086484> **ID:** \`${message.author.id}\``,
        inline: true
      },
      {
        name: `<:user:736597556963836054> **| Usuário Banido:**`,
        value:
          `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${username}\`\n` +
          `ㅤ<:SetaZu:765288356913086484> **ID:** \`${typeof membro === "string" ? membro : membro.id}\``, //id aqui
        inline: true
      },
      {
        name: "<:notepad:735956294854377603> **| Motivo:**",
        value: `ㅤ${motivo}`
      }
    );

  let membroban = new Discord.MessageEmbed()
    .setAuthor(
      `Você foi banido | Asukie™`,
      "https://cdn.discordapp.com/emojis/766406396337193020.png?v=1"
    )
    .setThumbnail(
      `https://media.discordapp.net/attachments/618150447261417492/626945093923766284/giphy_1.gif?width=453&height=453`
    )
    .addFields(
      {
        name: "<:autorolymus:747042714725646336> **| Autor do Banimento:**",
        value:
          `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${message.author.tag}\`\n` +
          `ㅤ<:SetaZu:765288356913086484> **ID:** \`${message.author.id}\``,
        inline: true
      },
      {
        name: "<:painel:737350900070350941> **| Servidor:**",
        value: `ㅤ<:SetaZu:765288356913086484> \`${message.guild.name}\``,
        inline: true
      },
      {
        name: "<:notepad:735956294854377603> **| Motivo:**",
        value: `ㅤ${motivo}`
      }
    )
    .setColor(`#0f4bff`);
   let banido = new Discord.MessageEmbed()
    .setTitle(`Sistema de Punições | Asukie™`)
    .setColor(`#0f4bff`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .addField(
      `<:user:736597556963836054> **| Usuário Banido:**`,
      `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${username}\`\n` +
        `ㅤ<:SetaZu:765288356913086484> **ID:** \`${typeof membro === "string" ? membro : membro.id}\``
    )
    .addField(
      `<:autorolymus:747042714725646336> **| Autor do Banimento:**`,
      `ㅤ<:SetaZu:765288356913086484> **Tag:** \`${message.author.tag}\`\n` +
        `ㅤ<:SetaZu:765288356913086484> **ID:** \`${message.author.id}\``
    )
    .addField(`<:Info_4:768643566804402276> **| Motivo:**`, `ㅤ${motivo}`);
  coletor.on("collect", cp => {
    cp.remove(message.author.id);
    if(!membro.bannable) return confirm_msg.delete().then(m => {
m.channel.send(unkn)
})
    if(membro.bannable) {
    membro.ban({reason : `Banido por: ${message.author.tag} | Motivo: ${motivo}`})
    }
    membro.send(membroban)
    message.channel.send(banido).then(m => {
      m.delete({ timeout: 20000 })
    })
    confirm_msg.delete();
  })

  let filtro2 = (reaction, usuario) =>
    reaction.emoji.id === "767937012287537163" &&
    usuario.id === message.author.id;
  let coletor2 = confirm_msg.createReactionCollector(filtro2, { max: 1 });

  coletor2.on("collect", cp => {
    confirm_msg.delete();
  })
}
}