const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: "wholesomememe",
	description: '',
	arguments: 0,
	usage: '',
	async execute(message) {

		const embed = new Discord.MessageEmbed();
		got('https://www.reddit.com/r/wholesomememes/random/.json').then(response => {

			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let wholesomeUrl = `https://reddit.com${permalink}`;
			let wholesomeImage = content[0].data.children[0].data.url;
			let wholesomeTitle = content[0].data.children[0].data.title;
			let wholesomeUpvotes = content[0].data.children[0].data.ups;
			let wholesomeNumComments = content[0].data.children[0].data.num_comments;

			embed.setTitle(`${wholesomeTitle}`)
				.setURL(`${wholesomeUrl}`)
				.setColor('RANDOM')
				.setImage(wholesomeImage)
				.setFooter(`👍 ${wholesomeUpvotes} 💬 ${wholesomeNumComments}`);

			message.channel.send(embed);

		});
	}
};

