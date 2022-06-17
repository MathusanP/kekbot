const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

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
		.addIntegerOption(option => option.setName('duration').setDescription('How long do you want to ban this user for?').setRequired(true))

		.addStringOption(option => option
			.setName('units')
			.setDescription('What units?')
			.addChoice('Seconds', 's')
			.addChoice('Minutes', 'm')
			.addChoice('Hours', 'h')
			.addChoice('Days', 'd')
			.setRequired(true),
		)
		.addStringOption(option => option.setName('reason').setDescription('Why are you putting them on timeout?').setRequired(false)),

	error: false,

	execute: async ({ interaction, client }) => {
		// Fetching user detail
		const user = interaction.options.getMember('user');
		const reason = interaction.options.getString('reason') ? interaction.options.getString('reason') : 'No reason specified';
		const id = interaction.options.getString('id') || interaction.guild;

		// Fetching guild detail
		const guild = client.guilds.cache.get(id) || interaction.guild;
		const guildname = interaction.guild.name;

		// Fetching time details; units
		const amount = interaction.options.getInteger('duration');
		const unit = interaction.options.getString('units');
		const time = interaction.options.getInteger('duration') * conversions[interaction.options.getString('units')];

		// Putting the user on timeout
		await user.timeout(time);

		const userEmbed = new MessageEmbed()
			.setTitle(`You have been timed out in ${guildname}`)
			.setThumbnail(guild.iconURL({ dynamic: true }))
			.addFields(
				{ name: '**Duration**', value: `${amount}${unit}`, inline: true },
				{ name: '**Reason**', value: `${reason}`, inline: true },
			)
			.setColor('RED')
			.setTimestamp();

		user.send({ embeds: [userEmbed] }).catch(() => { return; });
		interaction.followUp(`${user} has been timed out for ${amount}${unit}. :thumbsup:`);

	},
};
