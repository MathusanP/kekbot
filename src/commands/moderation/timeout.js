const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const conversions = {
	's': 1000,
	'm': 60 * 1000,
	'h': 3600 * 1000,
	'd': 24 * 3600 * 1000,
};

module.exports = {
	name: 'timeout',
	description: 'Applies a timeout to a user.',
	usage: '`/timeout <member> <duration> <units> [reason]`',

	permissions: ['Manage Members'],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('Applies a timout to a user')
		.addUserOption(option => option.setName('user').setDescription('The person you want to timeout').setRequired(true))
		.addIntegerOption(option => option.setName('duration').setDescription('How long for?').setRequired(true))
		.addStringOption(option => option
			.setName('units').setRequired(true).setDescription('How long for?')
			.addChoices(
				{ name: 'Seconds', value: 's' }, { name: 'Minutes', value: 'm' }, { name: 'Hours', value: 'h' },
				{ name: 'Days', value: 'd' }, { name: 'Weeks', value: 'w' },
			),
		)
		.addStringOption(option => option.setName('reason').setDescription('Why are we muting them?')),

	error: false,

	execute: async ({ interaction }) => {

		// Fetching user detail
		const user = interaction.options.getMember('user');
		const reason = interaction.options.getString('reason') ? interaction.options.getString('reason') : 'No reason specified';

		// Fetching guild detail
		const guild = interaction.guild;

		// Fetching time details; units
		const amount = interaction.options.getInteger('duration');
		const unit = interaction.options.getString('units');
		const time = interaction.options.getInteger('duration') * conversions[interaction.options.getString('units')];

		// Putting the user on timeout
		await user.timeout(time);

		const userEmbed = new EmbedBuilder()
			.setTitle(`You have been timed out in ${guild.name}`)
			.setThumbnail(guild.iconURL({ dynamic: true }))
			.addFields(
				{ name: '**Duration**', value: `${amount}${unit}`, inline: true },
				{ name: '**Reason**', value: `${reason}`, inline: true },
			)
			.setColor('Red')
			.setTimestamp();

		user.send({ embeds: [userEmbed] }).catch(() => false);
		interaction.followUp(`${user} has been timed out for ${amount}${unit}. :thumbsup:`);

	},
};
