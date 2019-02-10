exports.run = (client, message, args) => {
    message.channel.bulkDelete(args[0]+1);
} 

exports.help = {
    name: 'purge',
    usage: '>purge <amount>',
    description: 'Deletes a given amount of messages.',
    category: 'Moderation'
}