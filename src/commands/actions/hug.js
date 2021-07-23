const Discord = require('discord.js');
const huggifs = ["https://media1.tenor.com/images/23f263940d5d2bb8e8eaeb3c128e748f/tenor.gif?itemid=17750778", "https://media0.giphy.com/media/sUIZWMnfd4Mb6/200.gif", "https://acegif.com/wp-content/gif/anime-hug-38.gif"];
module.exports = {
	name: 'hug',
	description: '',
	arguments: 1,
	usage: '<member>',
	async execute(message) {

		if (message.mentions.members.first()) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> hugs <@${member.id}>!`)
				.setColor('RANDOM')
				.setImage(`${huggifs[Math.floor(Math.random() * [huggifs.length])]}`)
				.setTimestamp();
			message.channel.send(embed);
		}
		else {
			message.reply("Please provide a user mention to hug!");
		}

	}
};