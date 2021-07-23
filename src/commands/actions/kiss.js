const Discord = require('discord.js');
const kissgifs = ["https://acegif.com/wp-content/uploads/anime-kiss-m.gif", "https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif`", "https://i.pinimg.com/originals/66/19/1b/66191b81d5bf6c70bd065736f3e8662b.gif"];
module.exports = {
	name: 'kiss',
	description: '',
	arguments: 1,
	usage: '<member>',
	// eslint-disable-next-line no-unused-vars
	async execute(message, args) {

		if (message.mentions.members.first()) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> kisses <@${member.id}>!`)
				.setColor('RANDOM')
				.setImage(`${kissgifs[Math.floor(Math.random() * [kissgifs.length])]}`)
				.setTimestamp();
			message.channel.send(embed);
		}
		else {
			message.reply("Please provide a user mention to kiss!");
		}

	}
};