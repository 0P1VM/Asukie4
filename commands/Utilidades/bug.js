const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "bug",
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("<a:errado:753245066965024871> **|** Por favor descreva o bug. [**Aviso:** \`Não abuse do comando ou será colocado na BlackList\`]")
    }
    
    const channel = client.channels.cache.get('764930175354929182');
    
    
    if(!channel) {
      return message.channel.send("<a:errado:753245066965024871> **|** Não há canal setado para o report de Bugs.")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setTitle('Asukie™ | Bug')
    .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770483398757056512/AsukieBug.png')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
    .setColor("#0f4bff")
    .addField("Usuário", `${message.author}`)
    .addField("Bug", args.join(" "))
    .addField("Usuário ID", `\`${message.author.id}\``)
    .addField("Servidor ID", `\`${message.guild.id}\``)
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("<a:aaaaaa:766437760381878282> **|** Seu bug foi enviado com sucesso!")
    
  }
}