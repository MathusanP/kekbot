/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const slapgifs = [""];
module.exports = {
	name: 'slap',
	description: '',
	arguments: 1,
	usage: '<member>',
	async execute(message, args) {

		if (message.mentions.members.first()) {

			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> slaps <@${member.id}!>`)
				.setColor('RANDOM')
				.setImage(`https://i.pinimg.com/originals/a8/7d/e2/a87de27396fae40e3ea92190566531ec.gif`)
				.setTimestamp();
			message.channel.send(embed);
		}
		else {
			message.reply("Please provide a user mention to slap!");
		}

	}
};