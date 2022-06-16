const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'Kicks a member from the server.',
	usage: '<user> [reason]',

	permissions: ['Kick Members'],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks a member from the server!')
		.addUserOption(option => option
			.setName('user')
			.setDescription('User to kick')
			.setRequired(true),
		)

		.addStringOption(option => option
			.setName('reason')
			.setDescription('Why did you kick them?')
			.setRequired(false),
		),

	error: false,
	execute: async ({ interaction, client }) => {

		const user = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') ? interaction.options.getString('reason') : 'No reason specified';
		const id = interaction.options.getString('id') || interaction.guild;

		const guild = client.guilds.cache.get(id) || interaction.guild;
		const guildname = interaction.guild.name;

		const userEmbed = new MessageEmbed()
			.setTitle(`You have been kicked from ${guildname}`)
			.setColor('#DC143C')
			.setThumbnail(guild.iconURL({ dynamic: true }))
			.addFields(
				{ name: '**Reason**', value: `${reason}`, inline: false },
			)
			.setTimestamp();

		user.send({ embeds: [userEmbed] }).catch(() => { return; });

		interaction.guild.members.kick(user, `Mod: ${interaction.user.tag}\nReason: ${reason}`)
			.then(async () => {


				const embed = new MessageEmbed()
					.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
					.setTitle(`🔨 Kicked: ${user.tag}`)
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