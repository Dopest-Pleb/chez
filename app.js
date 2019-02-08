const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = ">"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    let args = msg.content.slice(prefix).split(' ');
    if (message.content.startsWith(">ping")) {
        message.channel.send(args);
    }
});

client.login(process.env.BOT_TOKEN);
