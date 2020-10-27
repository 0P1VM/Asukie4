 const translate = require('@vitalets/google-translate-api');
const Discord = require('discord.js');
const db = require('quick.db')
let langs = {
    'auto': 'Automatic',
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'en': 'English',
    'am': 'Amharic',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'az': 'Azerbaijani',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bs': 'Bosnian',
    'bg': 'Bulgarian',
    'ca': 'Catalan',
    'ceb': 'Cebuano',
    'ny': 'Chichewa',
    'zh-CN': 'Chinese (Simplified)',
    'zh-TW': 'Chinese (Traditional)',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'tl': 'Filipino',
    'fi': 'Finnish',
    'fr': 'French',
    'fy': 'Frisian',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'he': 'Hebrew',
    'iw': 'Hebrew',
    'hi': 'Hindi',
    'hmn': 'Hmong',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'ig': 'Igbo',
    'id': 'Indonesian',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'ko': 'Korean',
    'ku': 'Kurdish (Kurmanji)',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'lt': 'Lithuanian',
    'lb': 'Luxembourgish',
    'mk': 'Macedonian',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mn': 'Mongolian',
    'my': 'Myanmar (Burmese)',
    'ne': 'Nepali',
    'no': 'Norwegian',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'pa': 'Punjabi',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sm': 'Samoan',
    'gd': 'Scots Gaelic',
    'sr': 'Serbian',
    'st': 'Sesotho',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'es': 'Spanish',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'te': 'Telugu',
    'th': 'Thai',
    'tr': 'Turkish',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu'
}
module.exports = {
	name: 'traduzir',
	aliases: ['tradução', 'translate'],
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
 
  if (!args[0]) {
    return message.channel.send(`<a:errado:753245066965024871> **|** Você está usando de uma forma errada!! **ex:** \`a!traduzir pt en oi\` caso queira ver todos as linguas que a Asukie traduz só entrar nesse **link:** https://pastebin.com/kzQquhFf`)
}
  
  let msg = args.slice(2).join(' ');
  translate(msg, { from: args[0], to: args[1] }).then(res => {
     let embed = new Discord.MessageEmbed()
      .setTitle(`Asukie Tradutor`)
      .setColor('#0f4bff')
      .setTitle("Asukie™ | Traduzir")
      .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770320167107952671/TradutorAsukie.png')
      .setDescription(`Texto traduzido de: ` + "`" + `${langs[args[0]]}` + "`" + " para " + "`" + `${langs[args[1]]}` + "`")
      .addField('Texto enviado:', msg)
      .addField(`Texto traduzido:`, res.text)   
      .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
    
    message.channel.send(embed).then(m => {
m.delete({timeout: 20000})
})
  

  }).catch(err => {
    console.log(err)
    message.channel.send('<a:errado:753245066965024871> **|** Desculpe mas essa lingua não existe, ou não se encontra no meu banco de dados.').then(m => {
m.delete({timeout: 20000})
})
  })
}
}