exports.run = (client, message, args) => {
    message.channel.fetchMessages({limit : args[0]+1}).then(messages => {
        message.reply(Array.from(messages).length);
        message.channel.send(`${args[0]} messages deleted!`);
    });
} 

exports.help = {
    name: 'purge',
    usage: '>purge <amount>',
    description: 'Deletes a given amount of messages.',
    category: 'Moderation'
}