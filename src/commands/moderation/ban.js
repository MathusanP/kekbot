const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ban',
	description: 'Bans a member from the server.',
	usage: '<user> [reason]',

	permissions: ['Ban Members'],
	ownerOnly: false,
	guildOnly: true,

	options: [
		{ name: 'user', description: 'Who are you wanting to ban?', type: 'USER', required: true },
		{ name: 'reason', description: 'Why?', type: 'STRING', required: false },
	],

	error: false,
	execute: async ({ interaction }) => {

		const user = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') ? interaction.options.getString('reason') : 'No reason specified';

		interaction.guild.members.ban(user, { days: 0, reason: `Mod: ${interaction.user.tag}\nReason: ${reason}` })
			.then(async () => {

				const embed = new MessageEmbed()
					.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
					.setTitle(`🔨 Banned: ${user.tag}`)
					.setColor('#DC143C')
					.addFields(
						{ name: '**User**', value: `${user.tag} (${user.id})`, inline: false },
						{ name: '**Moderator**', value: `${interaction.user.tag} (${interaction.user.id})`, inline: false },
						{ name: '**Reason**', value: `${reason}`, inline: false },
					)
					.setTimestamp();

				interaction.followUp({ embeds: [embed], ephemeral: true });

			})
			.catch(() => interaction.followUp({ content: 'Sorry, an error has occurred, please double check my permissions.', ephemeral: true }));
	},
};
