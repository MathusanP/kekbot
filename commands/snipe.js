const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    const msg = bot.snipes.get(message.channel.id)
    const embed = new Discord.MessageEmbed()
   .setTitle(message.author.tag)
    .setDescription(msg.content)
    .setFooter('sucks to be sniped lmbfao')
    .setTimestamp();
    message.channel.send(embed);
    process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
}

module.exports.config = {
    name: "snipe",
    aliases: []
}