const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'warn',
	description: 'Warns a member.',
	usage: '<user> [reason]',

	permissions: ['Kick Members'],
	ownerOnly: false,
	guildOnly: true,

	options: [
		{ name: 'user', description: 'Who are you wanting to warn?', type: 'USER', required: true },
		{ name: 'reason', description: 'Why?', type: 'STRING', required: false },
	],

	error: false,
	execute: async ({ interaction }) => {

		const user = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') ? interaction.options.getString('reason') : 'No reason specified';

		const logEmbed = new MessageEmbed()
			.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
			.setTitle(`⚠️ Warned: ${user.tag}`)
			.setColor('#DC143C')
			.addFields(
				{ name: '**User**', value: `${user.tag} (${user.id})`, inline: false },
				{ name: '**Moderator**', value: `${interaction.user.tag} (${interaction.user.id})`, inline: false },
				{ name: '**Reason**', value: `${reason}`, inline: false },
			)
			.setTimestamp();

		const userEmbed = new MessageEmbed()
			.setTitle('⚠️ You have been warned!')
			.setColor('#DC143C')
			.addFields(
				{ name: '**Server**', value: `${interaction.guild} (${interaction.id})`, inline: false },
				{ name: '**Reason**', value: `${reason}`, inline: false },
			)
			.setTimestamp();

		user.send({ embeds: [userEmbed] }).catch(() => { return; });

		interaction.followUp({ embeds: [logEmbed], ephemeral: true });
	},
};
