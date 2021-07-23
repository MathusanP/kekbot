const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: 'aww',
	description: '',
	aliases: ["cute"],
	arguments: 0,
	usage: '',
	async execute(message) {

		const embed = new Discord.MessageEmbed();
		got('https://www.reddit.com/r/aww/random/.json').then(response => {
			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let awwUrl = `https://reddit.com${permalink}`;
			let awwImage = content[0].data.children[0].data.url;
			let awwTitle = content[0].data.children[0].data.title;
			let awwUpvotes = content[0].data.children[0].data.ups;
			let awwNumComments = content[0].data.children[0].data.num_comments;

			embed.setTitle(`${awwTitle}`)
				.setURL(`${awwUrl}`)
				.setColor('RANDOM')
				.setImage(awwImage)
				.setFooter(`👍 ${awwUpvotes} 💬 ${awwNumComments}`);

			message.channel.send(embed);

		}).catch(console.error);
	}
};
