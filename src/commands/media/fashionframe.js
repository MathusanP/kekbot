//This command is conclave exclusive and will not be announced to the public :D
const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: "fashionframe",
	aliases: ["capturapics", "captura"],
	description: '',
	arguments: 0,
	usage: '',
	async execute(message) {

		const embed = new Discord.MessageEmbed();

		got('https://www.reddit.com/r/WarframeRunway/random/.json').then(response => {
			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let capturaUrl = `https://reddit.com${permalink}`;
			let capturaImage = content[0].data.children[0].data.url;
			let capturaTitle = content[0].data.children[0].data.title;
			let capturaUpvotes = content[0].data.children[0].data.ups;
			let capturaNumComments = content[0].data.children[0].data.num_comments;

			embed.setTitle(`${capturaTitle}`);
			embed.setURL(`${capturaUrl}`);
			embed.setColor('RANDOM');
			embed.setImage(capturaImage);
			embed.setFooter(`👍 ${capturaUpvotes} 💬 ${capturaNumComments}`);
			message.channel.send(embed);

		});
	}
};
