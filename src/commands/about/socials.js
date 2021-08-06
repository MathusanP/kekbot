const discord = require('discord.js');

module.exports = {
	name: 'socials',
	description: 'Shows lots of cool information about the bot.',
	arguments: 0,
	usage: '',
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

		message.channel.send(embed);

	}
};