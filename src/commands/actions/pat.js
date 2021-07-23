/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const patgifs = ["https://media.tenor.com/images/8237d7da8cbd7227d67d735d437612cf/tenor.gif", "https://66.media.tumblr.com/84089922967b096420e340b32b9d97a6/tumblr_p679qztw1p1srt81jo3_500.gif", "https://i.pinimg.com/originals/c2/23/2a/c2232aec426d8b5e85e026cbca410463.gif"];
module.exports = {
	name: 'pat',
	description: '',
	arguments: 1,
	usage: '<member>',
	async execute(message, args) {

		if (message.mentions.members.first()) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> pats <@${member.id}>!`)
				.setColor('RANDOM')
				.setImage(`${patgifs[Math.floor(Math.random() * [patgifs.length])]}`)
				.setTimestamp();
			message.channel.send(embed);

		}
		else {
			message.reply("Please provide a user mention to pat!");
		}

	}
};