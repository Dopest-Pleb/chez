exports.run = async (bot, message, args) => {
    message.reply(`Pong! ${bot.ping}ms`);
} 

exports.help = {
    name: 'ping'
}