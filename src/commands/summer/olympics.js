//Delete in aug 8 (When the olympics end!)
const Discord = require('discord.js');
const got = require('got');
const advice = ["Make sure to wear suncream!", "Stay cool!", "Hope you are enjoying your summer!", "Bored during summer? Go explore a new hobby!", "Go hangout with your friends!", "Go to the beach!", "Stay frosty!"];
module.exports = {
	name: "olympics",
	description: '',
	arguments: 0,
	usage: '',
	aliases: ['olympic'],
	async execute(message) {

		const embed = new Discord.MessageEmbed();
		got('https://www.reddit.com/r/olympics/random/.json').then(response => {

			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let OlympicsUrl = `https://reddit.com${permalink}`;
			let OlympicsImage = content[0].data.children[0].data.url;
			let OlympicsTitle = content[0].data.children[0].data.title;
			embed.setTitle(`${OlympicsTitle}`)
				.setURL(`${OlympicsUrl}`)
				.setColor('RANDOM')
				.setImage(OlympicsImage)
				.setFooter(`${advice[Math.floor(Math.random() * [advice.length])]}`);

			message.channel.send(embed);

		});
	}
};

