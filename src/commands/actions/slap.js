const Discord = require('discord.js');

const slapgifs = [
	"https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612",
	"https://i.pinimg.com/originals/a8/7d/e2/a87de27396fae40e3ea92190566531ec.gif",
	"https://i.imgur.com/o2SJYUS.gif"
];

module.exports = {
	name: 'slap',
	description: 'Slap a user!',
	arguments: 1,
	usage: '<member>',
	async execute(message) {

		if (message.mentions.members.first()) {

			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setDescription(`${message.author} slaps ${member}!`)
				.setColor('RANDOM')
				.setImage(`${slapgifs[Math.floor(Math.random() * [slapgifs.length])]}`)
				.setTimestamp();
			message.channel.send({ embeds: [embed] });
		}
		else {
			message.channel.send({ content: "Please provide a user mention to slap!" });
		}

	}
};