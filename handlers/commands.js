const { readdirSync } = require("fs");

const ascii = require("ascii-table");

let table = new ascii("commands");
table.setHeading("Commands", "Status do carregamento");

module.exports = (client) => {
    console.log(`[COMANDOS] Carregando...`);
  // Ler todoas as sub pastas
  readdirSync("./commands/").forEach((dir) => {
    // Filtro de arquivos JS
    const comandos = readdirSync(`./commands/${dir}/`).filter((file) =>
      file.endsWith(".js")
    );

    for (let file of comandos) {
      let pull = require(`../commands/${dir}/${file}`);

      if (pull.name) {
        client.comandos.set(pull.name, pull);
        table.addRow(file, "✅ Tudo esta no seu devido lugar");
      } else {
        table.addRow(file, `❌ Algo deu errado, verifique o codigo`);
        continue;
      }

      // If there's an aliases key, read the aliases.
      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
    }
  });
};