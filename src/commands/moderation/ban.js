const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'ban',
	description: 'Bans a member from the server.',
	usage: '<user> [reason]',

	permissions: ['Ban Members'],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('bans a member from the server!')

		.addUserOption(option => option.setName('user').setDescription('User to ban').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Why did you ban them?').setRequired(false)),

	error: false,
	execute: async ({ interaction }) => {

		const user = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') ? interaction.options.getString('reason') : 'No reason specified';
		const guild = interaction.guild;

		const userEmbed = new EmbedBuilder()
			.setTitle(`You have been banned from ${guild.name}`)
			.setColor('#DC143C')
			.setThumbnail(guild.iconURL({ dynamic: true }))
			.addFields(
				{ name: '**Reason**', value: `${reason}`, inline: false },
			)
			.setTimestamp();

		user.send({ embeds: [userEmbed] }).catch(() => false);

		interaction.guild.members.ban(user, `Mod: ${interaction.user.tag}\nReason: ${reason}`)
			.then(async () => {


				const embed = new EmbedBuilder()
					.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
					.setTitle(`🔨 banned: ${user.tag}`)
					.setColor('#DC143C')
					.addFields(
						{ name: '**User**', value: `${user.tag} (${user.id})`, inline: false },
						{ name: '**Moderator**', value: `${interaction.user.tag} (${interaction.user.id})`, inline: false },
						{ name: '**Reason**', value: `${reason}`, inline: false },
					)
					.setTimestamp()
					.setFooter({ text: 'Problem? Please use /report. Powered by Automod' });

				interaction.followUp({ embeds: [embed], ephemeral: true });
			})
			.catch(() => interaction.followUp({ content: 'Sorry, an error has occurred, please double check my permissions.', ephemeral: true }));
	},
};