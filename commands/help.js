exports.run = (client, message, args) => {
    if (!args[0]) {
        message.channel.send({embed: {
            color: 3447003,
            fields: [
                {
                    name: "General",
                    value: Array.from(client.commands.keys()).filter(name => {
                        return client.commands.get(name).help.category === "General"
                    }).join("\n")
                },
                {
                    name: "Moderation",
                    value: Array.from(client.commands.keys()).filter(name => {
                        return client.commands.get(name).help.category === "Moderation"
                    }).join("\n")
                }
            ],
            footer: {
            text: "<Angle Brackets> = Required Parameters [Square Brackets] = Optional Parameters"
            }
        }
        });
    } else {
        
    }
} 

exports.help = {
    name: 'help',
    usage: '>help [command]',
    description: 'Returns all the bots commands.',
    category: 'General'
}