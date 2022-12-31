const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Shows the latency for the bot',
	usage: '',

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Shows the latency for the bot!'),

	error: false,
	execute: ({ interaction, client }) => {

		const embed = new EmbedBuilder()
			.setTitle('Pong!')
			.setDescription(`The number no one has asked for is: ${client.ws.ping}ms.`)
			.setColor('Green')
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });

	},
};
