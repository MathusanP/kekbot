const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const weather = require('weather-js');

module.exports = {
	name: 'weather',
	description: 'Shows the weather of a specified area',
	usage: '<area>',

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Shows the wather if a specified area!')

		.addStringOption(option => option.setName('area').setDescription('Location to get infromation for').setRequired(true)),

	error: false,
	execute: async ({ interaction }) => {

		const place = interaction.options.getString('area');
		weather.find({ search: `${place}`, degreeType: 'C' }, (error, result) => {


			if (error) return interaction.deferReply(error);
			if (result == undefined || result.length === 0) {
				interaction.followUp({ content: 'I do not recognise the location mentioned.' });
				return false;
			}

			const current = result[0].current;

			const weatherEmbed = new EmbedBuilder()
				.setColor('#1EE5F7')
				.setThumbnail(current.imageUrl)
				.setDescription(`**${current.skytext}**`)
				.addFields(
					{ name: 'Location:', value: `${current.observationpoint}` },
					{ name: 'Temperature', value: `${current.temperature}°C`, inline: true },
					{ name: 'Wind', value: `${current.winddisplay}`, inline: true },
					{ name: 'Feels like', value: `${current.feelslike}°`, inline: true },
					{ name: 'Humidity', value: `${current.humidity}%`, inline: true },
					{ name: 'Degree type', value: 'Celsius' },
				);
			interaction.followUp({ embeds: [weatherEmbed] });
		});
	},
};
