exports.run = (client, message, args) => {
    message.channel.fetchMessages({limit : args[0]+1}).then(messages => {
        for (let message of messages.values()) {
            message.delete();
        }
    });
} 

exports.help = {
    name: 'purge',
    usage: '>purge <amount>',
    description: 'Deletes a given amount of messages.',
    category: 'Moderation'
}