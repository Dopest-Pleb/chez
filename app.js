const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = ">"

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        console.log(file);
        const command = require(`./commands/${file}`);
        client.commands.set(command.help.name, command);
    });
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  for (guild in client.guilds) {
      guild.leave();
  }
});

client.on('message', msg => {
    console.log("okay1");
    if (!msg.content.startsWith(prefix)) return;
    console.log("okay2");
    let args = msg.content.split(" ").splice(1);
    let command = msg.content.substring(prefix.length).split(" ");
    let cmd = client.commands.get(command);
    console.log(command);
    console.log(cmd);
    
    if (cmd) {
        console.log("okay3");
        cmd.run(client, msg, args);
    }
});

client.login(process.env.BOT_TOKEN);
