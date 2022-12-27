const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'serverinfo',
	description: 'Shows all information regarding this server.',
	usage: '',

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Shows the information for this server.'),

	error: false,
	execute: ({ interaction, client }) => {
		const id = interaction.options.getString('id') || interaction.guild;
		const guild = client.guilds.cache.get(id) || interaction.guild;

		const guildname = interaction.guild.name;

		const embed = new MessageEmbed()
			.setColor('#0000FF')
			.setTitle(`${guildname}`)
			.setThumbnail(guild.iconURL({ dynamic: true }))
			.addFields(
				{ name: '**Owner**', value: `<@!${guild.ownerId}>`, inline: true },
				{ name: '**Member Count**', value: `${guild.memberCount}`, inline: true },

			)
			.setFooter({ text: 'Any issues? Use the /report feature' });
		interaction.followUp({ embeds: [embed] });
	},
};