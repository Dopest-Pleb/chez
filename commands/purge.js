exports.run = (client, message, args) => {
    console.log(message.channel.fetchMessages({limit : args[0]}));
} 

exports.help = {
    name: 'purge',
    usage: '>purge <amount>',
    description: 'Deletes a given amount of messages.',
    category: 'Moderation'
}