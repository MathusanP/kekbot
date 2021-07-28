//Delete in aug 8 (When the olympics end!)
const Discord = require('discord.js');
const got = require('got');

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
			let OlympicsUpvotes = content[0].data.children[0].data.ups;
			let OlympicsNumComments = content[0].data.children[0].data.num_comments;

			embed.setTitle(`${OlympicsTitle}`)
				.setURL(`${OlympicsUrl}`)
				.setColor('RANDOM')
				.setImage(OlympicsImage)
				.setFooter(`👍 ${OlympicsUpvotes} 💬 ${OlympicsNumComments}`);

			message.channel.send(embed);

		});
	}
};

