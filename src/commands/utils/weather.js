import { MessageEmbed } from 'discord.js';
import weather from 'weather-js';

export const name = 'weather';
export const description = 'It shows a description of the weather from a specific area';
export const args = 0;
export const usage = '[member]';
export const execute = (message, args) => {
	weather.find({ search: args.join(' '), degreeType: 'C' }, function(error, result) {
		if (error) return message.channel.send(error);
		if (!args[0]) return message.channel.send('Do that again, but this time you need to specify a city');

		if (result === undefined || result.length === 0) return message.channel.send('I don\'t recognise the location you sent me, please contact support at https://dsc.gg/kekbot');

		const current = result[0].current;

		const weatherEmbed = new MessageEmbed()
			.setColor('RANDOM')
			.setAuthor(`Weather forecast for ${current.observationpoint}`)
			.setThumbnail(current.imageUrl)
			.setDescription(`**${current.skytext}**`)
			.addField('Temperature', `${current.temperature}°C`, true)
			.addField('Wind', `${current.winddisplay}`, true)
			.addField('Feels like', `${current.feelslike}°`, true)
			.addField('Humidity', `${current.humidity}%`, true)
			.setFooter('Degree type: Celsius');
		message.channel.send({ embeds: [weatherEmbed] });
	});
};