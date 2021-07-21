const Discord = require('discord.js');

module.exports = {
	name: 'wave',
	aliases: [],
	description: '',
	arguments: 0,
	async execute(message, args) {

		if (!args[0]) {
			message.reply("Please provide a user mention to wave at!");
		}
		else if (message.mentions.members.first()) {
			const member = message.mentions.members.first();

			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> waves at <@${member.id}>!`)
				.setColor('RANDOM')
				.setImage(`https://media1.tenor.com/images/3cde3e1fe79e02abdc287395f57d8578/tenor.gif?itemid=16679443`)
				.setTimestamp();

			message.channel.send(embed);
		}
	}
};