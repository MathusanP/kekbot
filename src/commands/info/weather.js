const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');


module.exports = {
	name: 'weather',
	description: 'Shows the weather of a specified area',
	usage: '[member]',
	permissions: [],
	ownerOnly: false,
	guildOnly: true,
	options: [
		{ name: 'area', description: 'User to get information for', type: 'STRING', required: true },
	],

	error: false,
	execute: async ({ interaction }) => {
		const place = interaction.options.getString('area');
		weather.find({ search: `${place}`, degreeType: 'C' }, function(error, result) {


			if (error) return interaction.deferReply(error);
			if (result == undefined || result.length === 0) return interaction.reply('I do not recognise the location mentioned.');

			const current = result[0].current;

			const weatherEmbed = new MessageEmbed()
				.setColor('#1ee5f7')
				.setThumbnail(current.imageUrl)
				.setDescription(`**${current.skytext}**`)
				.addField('Location:', `${current.observationpoint}`)
				.addField('Temperature', `${current.temperature}°C`, true)
				.addField('Wind', `${current.winddisplay}`, true)
				.addField('Feels like', `${current.feelslike}°`, true)
				.addField('Humidity', `${current.humidity}%`, true)
				.addField('Degree type', 'Celsius');
			interaction.followUp({ embeds: [weatherEmbed] });
		});
	},
};
