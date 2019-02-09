exports.run = (client, message, args) => {
    message.reply(`Pong! ${client.ping}ms`);
} 

exports.help = {
    name: 'purge',
    usage: '>purge <amount>',
    description: 'Deletes a given amount of messages.',
    category: 'Moderation'
}