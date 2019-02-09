exports.run = (client, message, args) => {
    message.reply(`Pong! ${client.ping}ms`);
} 

exports.help = {
    name: 'ping',
    usage: '>ping',
    description: 'Returns the bot\'s latency in milliseconds',
    category: 'General'
}