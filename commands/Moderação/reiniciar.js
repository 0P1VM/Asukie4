const Discord = require("discord.js");

module.exports = {
	name: 'reiniciar',
	aliases: ['reload'],
  run: async (client, message, args) => {
message.delete();

var owner = [
"268403900355313674", 
"719944880800923690",
"752954404986159275"
]; 
    if (message.author.id === owner) {
        message.channel.send(`<a:Asukie_Certo:766437760381878282> | Ok, ${message.author}, Iniciando processo de reiniciação....`).then(m => {
m.delete({timeout: 5000})
})

        setTimeout(() => {
            process.exit(0);
        }, 5000); 
    } else {
        return;
        console.log('Fui Reiniciada com sucesso.')
        }
    }
}