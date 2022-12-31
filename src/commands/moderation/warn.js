const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'warn',
	description: 'Warns a member.',
	usage: '<user> [reason]',

	permissions: ['Kick Members'],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('warn')
		.setDescription('Warns a member in the server!')

		.addUserOption(option => option.setName('user').setDescription('User to warn').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Why are you warning them?').setRequired(false)),

	error: false,
	execute: async ({ interaction }) => {

		const user = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') ? interaction.options.getString('reason') : 'No reason specified';

		const logEmbed = new EmbedBuilder()
			.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
			.setTitle(`⚠️ Warned: ${user.tag}`)
			.setColor('#DC143C')
			.addFields(
				{ name: '**User**', value: `${user.tag} (${user.id})`, inline: false },
				{ name: '**Moderator**', value: `${interaction.user.tag} (${interaction.user.id})`, inline: false },
				{ name: '**Reason**', value: `${reason}`, inline: false },
			)
			.setTimestamp()
			.setFooter({ text: 'Moderation brought to you by autoMod!' });

		const userEmbed = new EmbedBuilder()
			.setTitle('⚠️ You have been warned!')
			.setColor('#DC143C')
			.addFields(
				{ name: '**Server**', value: `${interaction.guild} (${interaction.id})`, inline: false },
				{ name: '**Reason**', value: `${reason}`, inline: false },
			)
			.setTimestamp();

		user.send({ embeds: [userEmbed] }).catch(() => false);

		interaction.followUp({ embeds: [logEmbed], ephemeral: true });
	},
};
