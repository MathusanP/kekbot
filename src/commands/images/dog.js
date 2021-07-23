const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: "dog",
	aliases: ["dogpic", "dogpics", "dogs"],
	description: '',
	arguments: 0,
	usage: '',
	async execute(message) {

		const embed = new Discord.MessageEmbed();

		got('https://www.reddit.com/r/dog/random/.json').then(response => {
			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let dogsUrl = `https://reddit.com${permalink}`;
			let dogsImage = content[0].data.children[0].data.url;
			let dogsTitle = content[0].data.children[0].data.title;
			let dogsUpvotes = content[0].data.children[0].data.ups;
			let dogsNumComments = content[0].data.children[0].data.num_comments;

			embed.setTitle(`${dogsTitle}`);
			embed.setURL(`${dogsUrl}`);
			embed.setColor('RANDOM');
			embed.setImage(dogsImage);
			embed.setFooter(`👍 ${dogsUpvotes} 💬 ${dogsNumComments}`);
			message.channel.send(embed);

		}).catch(console.error);
	}
};
