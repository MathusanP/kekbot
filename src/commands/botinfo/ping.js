const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Shows the latency for the bot',
	usage: '',
	aliases: [],

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	error: false,
	execute: ({ interaction, client }) => {

		const embed = new MessageEmbed()
			.setTitle('Pong!')
			.setDescription(`The number no one has asked for is: ${client.ws.ping}ms.`)
			.setColor('RANDOM')
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });

	},
};