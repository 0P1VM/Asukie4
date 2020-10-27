const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'covidprev',
	description: 'prevenção COVID-19',
    aliases: ['covidprevenção', 'c19prev'],
    usage: '$covidprev',
    cooldown: 5,
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
    
    let covidprev = new Discord.MessageEmbed()
    .setTitle('Prevenção COVID-19')
    .addField('Por que devemos lavar as mãos frequentemente?', ' O sabão rompe a membrana de gordura que os vírus possuem, fazendo com que "morram". Por isso, segundo a OMS (Organização Mundial da Saúde), lavar as mãos com água e sabão frequentemente é uma das principais formas de evitar a contaminação.\n A recomendação é fazer isso o tempo todo, principalmente ao entrar em contato com outras pessoas, ir à rua, tocar em objetos de uso comum (maçanetas, botão do levador, corrimão etc.), antes de comer ou preparar alimentos e depois de usar o banheiro.')
    .addField('Como lavar as mãos corretamente?', ' Use sabão suficiente para que a espuma cubra toda a superfície das mãos. A lavagem completa deve durar cerca de 50 segundos e ter os seguintes passos:\n Esfregue bem a palma das mãos; capriche na limpeza do espaço entre os dedos e também do dorso e do punho. Depois, seque com toalha descartável (em ambientes coletivos). Se a torneira não for automática, use a tolha de papel para fechá-la, ou lave a torneira antes de ensaboar as mãos.')
    .addField('Por que devemos ficar em casa?', ' Como nosso organismo ainda não tem anticorpos para combater o novo coronavírus, ele é transmitido facilmente de um indivíduo para outro. Se as pessoas continuarem levando uma vida normal (indo trabalhar, frequentando lugares aglomerados etc.), o número de pacientes com covid-19 tende a se elevar rapidamente e sobrecarregar o sistema de saúde. Aí, os hospitais não conseguem atender adequadamente casos graves e o número de mortes aumenta.\n Segundo pesquisa epidemiológica do Instituto Butantan, no estado de São Paulo, uma pessoa infectada antes do isolamento tinha potencial para transmitir o vírus para seis pessoas, em média. Com a quarentena, essa taxa caiu para duas pessoas. Por isso é muito importante que todos continuem em casa para evitar o crescimento acentuado da covid-19.')
    .setColor('#0f4bff')
    .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/770326529573257246/Asukiecovid19.png')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(covidprev)

    }
}