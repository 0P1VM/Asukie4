module.exports = client => {
  
    let tabela = [
    {name: `k!help`, type: "STREAMING", url: "https://www.twitch.tv/kushina" }
    ];

  function st() {
    let status = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setActivity(status);
  }
  st();
  setInterval(() => st(), 5000);
  
  console.log(`[CONSOLE] Logado com ${client.user.username}!`);
  client.user.setPresence({ activity: { name: `Luan!` }, status: 'dnd' })
  
    console.log("+------------------------------------+");
    console.log(`|  ${client.user.username} ESTÁ ONLINE`);
    console.log("+------------------------------------+");
    console.log(`| Comandos: ${client.comandos.size}`);
    console.log(`| Servidores: ${client.guilds.cache.size}`);
    console.log(`| Canais: ${client.channels.cache.size}`);
    console.log("+------------------------------------+");
  
}