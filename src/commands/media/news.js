const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: 'news',
	description: '',
	arguments: 0,
	usage: '',
	async execute(message) {

		const embed = new Discord.MessageEmbed();
		got('https://www.reddit.com/r/news/random/.json').then(response => {

			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let newsUrl = `https://reddit.com${permalink}`;
			let newsImage = content[0].data.children[0].data.url;
			let newsTitle = content[0].data.children[0].data.title;
			let newsUpvotes = content[0].data.children[0].data.ups;
			let newsNumComments = content[0].data.children[0].data.num_comments;

			embed.setTitle(`${newsTitle}`)
				.setURL(`${newsUrl}`)
				.setColor('RANDOM')
				.setImage(newsImage)
				.setFooter(`👍 ${newsUpvotes} 💬 ${newsNumComments}`);
			message.channel.send(embed);

		});
	}
};

