module.exports = async (client, message) => {
  
  const Discord = require('discord.js');
  const c = require("../../config.json");
const cooldowns = new Discord.Collection()
  
  if (message.author.bot) return;
  
   // comando para o bot não responder dm's
  if (message.author.bot && message.guild) return;
  if (message.channel.type === "dm") return;
      
  
if (!message.content.startsWith(c.prefix)) return;
  
  // Se message.member estiver desanexado, armazene-o em cache.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  
  const args = message.content.slice(c.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

if (!cooldowns.has(cmd.name)) {
    cooldowns.set(cmd.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(cmd.name);
  const cooldownAmount = (cmd.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(
        `> ${message.author}. Espere \`${timeLeft.toFixed()}\` segundo(s) para utilizar um comando novamente.`
      ).then(m => {
m.delete({timeout: 6000})
})
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

const logg = new Discord.WebhookClient('770083731520094208', 'jsbJe_k6H10iPBaXgr1Gb71S2fFfedv-RMw1TzGHLjUWawMSVEDn7k0nK-yf1pavPwhl')
let cmdlog = new Discord.MessageEmbed()
.setColor('#0f4bff')
.setAuthor(`${client.user.username} | Commands`, client.user.displayAvatarURL({dynamic:true}))
.setThumbnail('https://cdn.discordapp.com/emojis/753979367360692274.png?v=1')
.setDescription(`**<:Kali:758857635205742633> Autor:**\nㅤ<:blueseta2:770111511255056395> Nome: \`${message.author.tag}\`\nㅤ<:blueseta2:770111511255056395> ID: \`${message.author.id}\`\n`+ 
 `**<:Info_3:768616100593270794> Servidor:**\nㅤ<:blueseta2:770111511255056395> Nome: \`${message.guild.name}\`\nㅤ<:blueseta2:770111511255056395> ID: \`${message.guild.id}\`\n` +
 `ㅤ\nㅤㅤㅤ<:livro_asukie_7_muda_a_cor:770111800346804245> **Comando efetuado:**ㅤㅤㅤ\nㅤ\`\`\`md\n# ${c.prefix}${cmd} ${args}\`\`\``)
.setFooter(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()

logg.send(cmdlog)

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

    let embed = new Discord.MessageEmbed()
    .setDescription(`<:Asukie_atencao:766406396337193020> **|** O comando não existe, utilize \`${c.prefix}ajuda\` para mais informações.`)
    .setColor("#0f4bff")
    message.channel.send(embed)
    .then(message => message.delete({ timeout: 40000 }))
  
  }
}