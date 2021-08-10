const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: "quote",
	aliases: ["quotes"],
	description: 'Fetches a quote from r/quotes',
	arguments: 0,
	async execute(message) {

		got('https://www.reddit.com/r/quotes/random/.json').then(response => {
			const content = JSON.parse(response.body);

			const embed = new Discord.MessageEmbed()
				.setTitle(`${content[0].data.children[0].data.title}`)
				.setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`)
				.setColor('RANDOM')
				.setImage(`${content[0].data.children[0].data.url}`)
				.setFooter(`👍 ${content[0].data.children[0].data.ups} 💬 ${content[0].data.children[0].data.num_comments}`);

			message.channel.send({ embeds: [embed] });

		});
	}
};
