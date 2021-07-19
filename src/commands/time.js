const Discord = require('discord.js')

module.exports = {
	name: "time",
    aliases: ["clock"],
    description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('** **')
        .setTimestamp();
        message.channel.send(embed);
    }
}   