const Discord = require('discord.js');

module.exports = {
	name: 'handshake',
	description: 'Handshake a user!',
	arguments: 1,
	usage: '<member>',
	async execute(message) {


		if (message.mentions.members.first()) {
			const member = message.mentions.members.first();

			const embed = new Discord.MessageEmbed()
				.setDescription(`${message.author} shakes hand with ${member}!`)
				.setColor('RANDOM')
				.setImage(`https://giffiles.alphacoders.com/138/138824.gif`)
				.setTimestamp();

			message.channel.send({ embeds: [embed] });

		}
		else{
			message.channel.send({ content: "Please provide a user mention to handhshake!" });
		}

	}
};