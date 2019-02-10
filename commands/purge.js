exports.run = (client, message, args) => {
    message.channel.fetchMessages({limit : args[0]+1}).then(messages => {
        for (let message of messages.values()) {
            message.delete();
        }
        message.channel.send(`${args[0]} messages deleted!`).delete(4000);
    });
} 

exports.help = {
    name: 'purge',
    usage: '>purge <amount>',
    description: 'Deletes a given amount of messages.',
    category: 'Moderation'
}