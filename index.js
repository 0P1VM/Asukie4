const {Client, Collection, MessageEmbed} = require("discord.js");
const fs = require("fs");
const config = require("./config.json")
const client = new Client({ partials: ["USER", "MESSAGE", "CHANNEL", "REACTION"]},
      new Client({
  disableEveryone: true
}))
client.queue = new Map();
client.vote = new Map();
client.comandos = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["aliases", "commands"].forEach(x => client[x] = new Collection());
["commands", "eventos"].forEach(x => require(`./handlers/${x}`)(client));


client.login(process.env.TOKEN)