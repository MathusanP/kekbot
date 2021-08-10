const discord = require('discord.js');

module.exports = {
	name: 'socials',
	description: 'Get links to all of my social medias.',
	arguments: 0,
	alias: ['social'],
	execute(message) {

		const embed = new discord.MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`Here are my socials!`)
			.addFields(
				{ name: `**Twitter:**`, value:`https://twitter.com/k3kbot`, inline: true },
				{ name: `**Instagram:**`, value: `https://www.instagram.com/k3kbot/`, inline: true },
			)
			.setFooter(`Email: kekbot6@gmail.com`);

		message.channel.send({ embeds: [embed] });

	}
};