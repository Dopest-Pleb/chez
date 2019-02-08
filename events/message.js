module.exports = (client, msg) => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(client.config.prefix) !== 0) return;

    let args = msg.content.split(" ").splice(1);
    let command = msg.content.substring(client.config.length).split(" ")[0];
    let cmd = client.commands.get(command);
    
    if (!cmd) return;

    cmd.run(client, msg, args);
  };