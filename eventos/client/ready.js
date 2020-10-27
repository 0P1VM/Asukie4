module.exports = client => {
    let usuarios = client.users.cache.size

  console.log(`[CONSOLE] Logado com ${client.user.username}!`);
  client.user.setPresence({ activity: { name: `Asukie` }, status: 'dnd' })
  
    console.log("+------------------------------------+");
    console.log(`|  ${client.user.username} ESTÁ ONLINE`);
    console.log("+------------------------------------+");
    console.log(`| Comandos: ${client.comandos.size}`);
    console.log(`| Servidores: ${client.guilds.cache.size}`);
    console.log(`| Usuários: ${usuarios}`);
    console.log(`| Canais: ${client.channels.cache.size}`);
    console.log("+------------------------------------+");
  
}