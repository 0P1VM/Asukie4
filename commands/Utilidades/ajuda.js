const Discord = require("discord.js")
const c = require('../../config.json')

module.exports = {
	name: 'ajuda',
	aliases: ['help', 'painel'],
  run: async (client, message, args) => {
message.delete();

    let painel = new Discord.MessageEmbed()
    .setColor("#0f4bff") 
    .setAuthor(`${client.user.username} - ${c.v}`, client.user.displayAvatarURL({ dynamic:true }))
	.setDescription(`**Olá ${message.author}, este aqui é o menu principal, todos meus sistemas e comandos estarão abaixo.**\n\n**Links Importantes:\n` +
  `<:AsukieSeta0:770338265969459201> [Me adicione em seu servidor](https://discord.com/api/oauth2/authorize?client_id=749044223692767302&permissions=8&scope=bot)\n` +
  `<:AsukieSeta0:770338265969459201> [Vote em mim no top.gg](https://top.gg/bot/749044223692767302)\n` +
  `<:AsukieSeta0:770338265969459201> [Meu servidor de suporte](https://discord.gg/n5eNazJ)**`)
	  .addField(`Defesa e Segurança:`, `**<:AsukieNumber1:770407285485731900> | Administração\n` +
    `<:AsukieNumber2:770407770633142323> | Moderação \n` +
    `<:AsukieNumber3:770407825116495892> | Configuração**`, true)
 .addField(`Opções:`, `**<:AsukieNumber4:770407869552001035> | Interação\n` +
    `<:AsukieNumber5:770407927885987841> | Utilidades**`, true)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
	.setThumbnail('https://media.discordapp.net/attachments/759155689733226517/770125872229253150/660973379037298696.png')
.setImage('https://i.imgur.com/rYKyIXl.png')

     message.channel.send(painel).then(msg => {
       msg.react('770334996246167573').then(() => msg.react('770407285485731900')).then(() => msg.react('770407770633142323')).then(() => msg.react('770407825116495892')).then(() => msg.react('770407869552001035')).then(() => msg.react('770407927885987841'))
       
      let adm = (reaction, usuario) => reaction.emoji.id === "770407285485731900" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(adm);

      let administracao = new Discord.MessageEmbed()
	 .setColor("#0f4bff") 
     .setAuthor(`${client.user.username} - Administração`, client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**·Prefixo:** \`${c.prefix}\`\n` +
	 `\n<:SetaZu:765288356913086484> **Addemoji** - Adicione algum emoji dentro do servidor\n` +
	 `<:SetaZu:765288356913086484> **Addcargo** - Adicione um cargo, em algum usuário.\n` +
	 `<:SetaZu:765288356913086484> **Removecargo** - Retire um cargo de algum usuário.\n` +
	 `<:SetaZu:765288356913086484> **Cargoall** - Adicione algum cargo, para todos dentro do servidor.\n` +
	 `<:SetaZu:765288356913086484> **Votacao** - Faz uma votação no seu servidor(obs: use o comando no chat onde você irá fazer a votação.)`)
	 .setFooter(`Página 1 de 5 | Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
	 .setThumbnail('https://media.discordapp.net/attachments/759155689733226517/770125872229253150/660973379037298696.png')
   .setImage('https://i.imgur.com/rYKyIXl.png')
      coletor.on("collect", cp => {

      msg.edit(administracao)
      cp.users.remove(message.author.id)
     
     })

      let mod = (reaction, usuario) => reaction.emoji.id=== "770407770633142323" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(mod);

      let moderacao = new Discord.MessageEmbed()
	 .setColor("#0f4bff") 
     .setAuthor(`${client.user.username} - Moderação`, client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**·Prefixo:** \`${c.prefix}\`\n` +
`\n<:SetaZu:765288356913086484> **Clear** - Limpe um chat de 2 a 100 mensagem.\n` +
`<:SetaZu:765288356913086484> **Lock** - Tranque algum chat, para os membros não falar.\n` +
`<:SetaZu:765288356913086484> **Unlock** - Destranque o chat que esteja trancado.\n` +
`<:SetaZu:765288356913086484> **Mute** - Mute algum usuário por um determinado tempo.\n` +
`<:SetaZu:765288356913086484> **Unmute** - Desmute o usuário que esteja mutado.\n` +
`<:SetaZu:765288356913086484> **Slowmode** - Coloque uma quantidade de segundos, em um chat pra os membros falarem com uma menor frequência\n` +
`<:SetaZu:765288356913086484> **Ban** - Bani um determinado usúario.\n` +
`<:SetaZu:765288356913086484> **Unban** - Desbani algum usuário pelo id dele.\n` +
`<:SetaZu:765288356913086484> **Kick** - Expulse algum membro do seu servidor.\n` +
`<:SetaZu:765288356913086484> **Warn** - De um aviso pra algum usuário.`)
 .setFooter(`Página 2 de 5 | Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
 .setThumbnail('https://media.discordapp.net/attachments/759155689733226517/770125872229253150/660973379037298696.png')
  .setImage('https://i.imgur.com/rYKyIXl.png')
     coletor2.on("collect", cp => {

      msg.edit(moderacao)
     cp.users.remove(message.author.id)
     })

      let config = (reaction, usuario) => reaction.emoji.id === "770407825116495892" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(config);

      let configuracao = new Discord.MessageEmbed()
     	 .setColor("#0f4bff") 
     .setAuthor(`${client.user.username} - Configuração`, client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**·Prefixo:** \`${c.prefix}\`\n` +
 `\n<:SetaZu:765288356913086484> **Defesa** - Deixe seu servidor muito mas seguro.\n` +
 `<:SetaZu:765288356913086484> **Autorole** - Ative autorole dos bots e membros.\n` +
 `<:SetaZu:765288356913086484> **Painel** - Veja o painel do servidor.\n` +
 `<:SetaZu:765288356913086484> **Welcome** - Configure o sistema de entrada/saída.\n` +
 `<:SetaZu:765288356913086484> **Logs** - Selecione um chat para aparecer mensagens deletadas/editada etc.\n` +
 `<:SetaZu:765288356913086484> **Imunidade** - Selecione chat/cargo, que ser alguma defesa estiver ativada, o bot não irá excluir.\n` +
 `<:SetaZu:765288356913086484> **Contador** - Coloque no mínimo 10 chats, onde o bot irá contar os membros do servidor todo.`)
  .setFooter(`Página 3 de 5 | Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail('https://media.discordapp.net/attachments/759155689733226517/770125872229253150/660973379037298696.png')
  .setImage('https://i.imgur.com/rYKyIXl.png')
      coletor3.on("collect", cp => {

      msg.edit(configuracao)
     cp.users.remove(message.author.id)
      })

      let int = (reaction, usuario) => reaction.emoji.id === "770407869552001035" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(int);

      let interacao = new Discord.MessageEmbed()
     	 .setColor("#0f4bff") 
     .setAuthor(`${client.user.username} - Interação`, client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**·Prefixo:** \`${c.prefix}\`\n` +
 `\n<:SetaZu:765288356913086484> **Cocegas** - Faça cócegas em algum amiguinho.\n` +
 `<:SetaZu:765288356913086484> **Primeiraspalavras** - Primeiras palavras de um bebê.\n` +
 `<:SetaZu:765288356913086484> **Kiss** - Beije seu crush.\n` +
 `<:SetaZu:765288356913086484> **Stonks** - Use o comando e veja a sua mensagem no meme Stonks.\n` +
 `<:SetaZu:765288356913086484> **Ship** - Faça um ship de algum casal.\n` +
 `<:SetaZu:765288356913086484> **Cafune** - Faça um cafuné em algum amigo(a).\n` +
 `<:SetaZu:765288356913086484> **Gay** - Veja a sua porcetagem de ser gay. **(Leve o comando na zoeira)**\n` +                    
 `<:SetaZu:765288356913086484> **Tapa** - De um tapa em alguém.\n` +
 `<:SetaZu:765288356913086484> **Deus** - Use o comando e veja oque deus nunca iria aceitar.\n` +                   
 `<:SetaZu:765288356913086484> **Japauau** - Use o comando e veja um programa japonês reagindo ao o que você escreveu.\n` +
 `<:SetaZu:765288356913086484> **Supreme** - Use o comando e veja a logo da Supreme com oque você escreveu.\n` +                    
 `<:SetaZu:765288356913086484> **Hipocrisia** - Escreva algo pra aparecer no meme do "Enfim a hipocrisia".\n` +                    
  `<:SetaZu:765288356913086484> **Suicide** - "Se mate usando o comando. **(Leve o comando na zoeira, são apenas gif's de Animes)**\n` +                    
 `<:SetaZu:765288356913086484> **Matar** - Mate alguém. **(Leve o comando na zoeira, são apenas gif's de Animes)**\n` +
 `<:SetaZu:765288356913086484> **Hackear** - "hackei" alguém. **(Leve o comando na zoeira)**\n` +
 `<:SetaZu:765288356913086484> **Duvida** - Deixa eu tirar uma dúvida sua.\n` +
 `<:SetaZu:765288356913086484> **Soco** - De um soco em alguém chato.\n` +  
 `<:SetaZu:765288356913086484> **Cry** - Chore pela crush.\n` +                    
 `<:SetaZu:765288356913086484> **Hug** - De um abraço em algum amigo(a).\n` +                                                        
 `<:SetaZu:765288356913086484> **Dado** - Jogue dado comigo.\n` +
 `<:SetaZu:765288356913086484> **Roletarussa** - Jogue roletarussa comigo.\n` +                   
 `<:SetaZu:765288356913086484> **Baka** - Chame alguém de baka.`)
  .setFooter(`Página 4 de 5 | Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail('https://media.discordapp.net/attachments/759155689733226517/770125872229253150/660973379037298696.png')
  .setImage('https://i.imgur.com/rYKyIXl.png')
      coletor4.on("collect", cp => {

      msg.edit(interacao)
     cp.users.remove(message.author.id)
     })

      let uti = (reaction, usuario) => reaction.emoji.id === "770407927885987841" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(uti);

      let utilidade = new Discord.MessageEmbed()
     	 .setColor("#0f4bff") 
     .setAuthor(`${client.user.username} - Utilidades`, client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<a:gatinho_:763776921326190655>**·Prefixo:** \`${c.prefix}\`\n\n` +
     `<:SetaZu:765288356913086484> **Invite** - Veja os links do meu convite e do meu servidor suporte.\n` +                            
     `<:SetaZu:765288356913086484> **Cpu** - Veja minhas configurações de cpu.\n`+
     `<:SetaZu:765288356913086484> **Avatar** - Veja seu avatar em um tamanho maior ou de outro membro.\n` +
     `<:SetaZu:765288356913086484> **Covid** - Veja os casos do Covid-19 no mundo inteiro.\n` +
     `<:SetaZu:765288356913086484> **Covidsin** - Veja os sintomas do Covid-19.\n` +                                                                              
     `<:SetaZu:765288356913086484> **Botinfo** - Veja informações do bot toda.\n` +
     `<:SetaZu:765288356913086484> **Traduzir** - Traduza algum texto com facilidade e rapidez.\n` +                
     `<:SetaZu:765288356913086484> **Steam** - Veja as informações do seu jogo preferido da plataforma Steam.\n` +
     `<:SetaZu:765288356913086484> **Serfil** - Obtenha as informações sobre Séries e Filmes.\n` +
     `<:SetaZu:765288356913086484> **Pais** - Obtenha as informações de algum País.\n` +                            
     `<:SetaZu:765288356913086484> **Latencia** - Veja a latência da Asukie.\n` +            
     `<:SetaZu:765288356913086484> **Clima** - Veja o clima de alguma cidade.\n` + 
     `<:SetaZu:765288356913086484> **Roleinfo** - Veja as informações de algum cargo.\n` +        
     `<:SetaZu:765288356913086484> **Listrole** - Veja todos os cargos de algum servidor.\n` +                               
     `<:SetaZu:765288356913086484> **Servericon** - Veja a foto do servidor em tamanho maior.\n` +                     
     `<:SetaZu:765288356913086484> **Serverinfo** - Veja as informações do servidor.\n` +
     `<:SetaZu:765288356913086484> **Userinfo** - Veja informações de algum usuário.\n` +                
     `<:SetaZu:765288356913086484> **Emoji** - Veja algum emoji em um tamanho maior, pode ser de outros servidores também.`)
  .setFooter(`Página 5 de 5 | Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail('https://media.discordapp.net/attachments/759155689733226517/770125872229253150/660973379037298696.png')
  .setImage('https://i.imgur.com/rYKyIXl.png')
      coletor5.on("collect", cp => {

      msg.edit(utilidade)
     cp.users.remove(message.author.id)
     })

     let ini = (reaction, usuario) => reaction.emoji.id === "770334996246167573" && usuario.id === message.author.id;
     let coletor6 = msg.createReactionCollector(ini);
      coletor6.on("collect", cp => {

      msg.edit(painel)
      cp.users.remove(message.author.id)
     })
  })
}
}