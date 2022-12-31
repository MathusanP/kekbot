const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'untimeout',
	description: 'Removes a timeout to a user.',
	usage: '<member>',

	permissions: ['Manage Members'],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('untimeout')
		.setDescription('Removes a timout from a user')

		.addUserOption(option => option.setName('user').setDescription('The person you want to timeout').setRequired(true)),

	error: false,

	execute: async ({ interaction }) => {

		const user = interaction.options.getMember('user');
		await user.timeout(null);
		interaction.followUp(`Removed timeout from ${user}.`);

	},
};
