const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const configFile = require("./config.json");

client.commands = new Discord.Collection();
client.config = configFile;

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const command = require(`./commands/${file}`);
        client.commands.set(command.help.name, command);
        console.log(`${file} loaded!`);
    });
});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.login(process.env.BOT_TOKEN);
