module.exports = async (client, message) => {
  
  const { Client, MessageEmbed } = require('discord.js');
  const { prefix, token, config } = require("../../config.json");

  
  if (message.author.bot) return;
  
   // comando para o bot não responder dm's
  if (message.author.bot && message.guild) return;
  if (message.channel.type === "dm") return;
      
  
if (!message.content.startsWith(prefix)) return;
  
  // Se message.member estiver desanexado, armazene-o em cache.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Pega o comando
  let comando = client.comandos.get(cmd);
  // Se nenhum for encontrado, tente encontrá-lo por alias
  if (!comando) comando = client.comandos.get(client.aliases.get(cmd));

  //let argsToParse = message.content.substring(message.content.indexOf(' ')+1);

  // Se um comando for finalmente encontrado, execute o comando
 if (comando) {
    comando.run(client, message, args); // isso faz funcionar o comando de bloquei*/);
  } else {
    message.delete();

    let embed = new MessageEmbed()
    .setDescription(`<:Asukie_atencao:766406396337193020> **|** O comando não existe, utilize \`${prefix}ajuda\` para mais informações.`)
    .setColor("#0f4bff")
    message.channel.send(embed)
    .then(message => message.delete({ timeout: 40000 }))
  
  }
}