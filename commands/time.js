const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('** **')
    .setTimestamp();
    message.channel.send(embed);
    process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
}   

module.exports.config = {
    name: "time",
    aliases: ["clock"]
}