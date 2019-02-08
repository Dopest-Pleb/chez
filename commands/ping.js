exports.run = (bot, message, args) => {
    message.reply(`Pong! ${bot.ping}ms`);
} 

exports.help = {
    name: 'ping',
    usage: '>ping',
    description: 'Returns the bot\'s latency in milliseconds'
}