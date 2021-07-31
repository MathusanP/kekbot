var weather = require('weather-js');
const discord = require('discord.js');

module.exports = {
	name: 'weather',
	description: 'Displays the weather in a requested city',
	arguments: 0,
	usage: '',

	async execute(message, args) {
		weather.find({ search: args.join(" "), degreeType: `C` }, function(error, result) {
			if(error) return message.channel.send(error);
			if(!args[0]) return message.channel.send("Do that again, but this time you need to specify a city");

			if(result === undefined || result.length === 0) return message.channel.send("I don't recognise the location you sent me, please contact support at https://dsc.gg/kekbot");

			var current = result[0].current;
			var location = result[0].location;

			const embed = new discord.MessageEmbed()
				.setColor('RANDOM')
				.setAuthor(`Weather forecast for ${current.observationpoint}`)
				.setThumbnail(current.imageUrl)
				.setDescription(`**${current.skytext}**`)
				.addField('TimeZone', `UTC ${location.timezone}`, true)
				.addField('Degree Type', 'Celsius', true)
				.addField('Temperature', `${current.temperature}°`, true)
				.addField('Wind', `${current.winddisplay}`, true)
				.addField('Feels like', `${current.feelslike}°`, true)
				.addField('Humidity', `${current.humidity}$`, true);

			message.channel.send(embed);

		}
		);
	} };
