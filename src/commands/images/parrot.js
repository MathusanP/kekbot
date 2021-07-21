const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: 'parrot',
	description: '',
	arguments: 0,
	async execute(message) {

		const embed = new Discord.MessageEmbed();

		got('https://www.reddit.com/r/parrots/random/.json').then(response => {

			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let parrotUrl = `https://reddit.com${permalink}`;
			let parrotImage = content[0].data.children[0].data.url;
			let parrotTitle = content[0].data.children[0].data.title;
			let parrotUpvotes = content[0].data.children[0].data.ups;
			let parrotNumComments = content[0].data.children[0].data.num_comments;

			embed.setTitle(`${parrotTitle}`)
				.setURL(`${parrotUrl}`)
				.setColor('RANDOM')
				.setImage(parrotImage)
				.setFooter(`👍 ${parrotUpvotes} 💬 ${parrotNumComments}`);
			message.channel.send(embed);

		});
	}
};
