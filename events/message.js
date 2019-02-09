module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(client.config.prefix) !== 0) return;
    

    let args = message.content.split(" ").splice(1);
    let command = message.content.substring(client.config.prefix.length).split(" ")[0];
    let cmd = client.commands.get(command);
    
    if (!cmd) return;

    cmd.run(client, message, args);
  };