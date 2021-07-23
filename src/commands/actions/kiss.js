const Discord = require('discord.js');

module.exports = {
	name: 'kiss',
	description: '',
	arguments: 1,
	usage: '<member>',
	async execute(message, args) {

		if (message.mentions.members.first()) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> kisses <@${member.id}>!`)
				.setColor('RANDOM')
				.setImage(`https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif`)
				.setTimestamp();
			message.channel.send(embed);
		}
		else {
			message.reply("Please provide a user mention to kiss!");
		}

	}
};