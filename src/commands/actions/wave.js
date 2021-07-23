const Discord = require('discord.js');
const wavegifs = ["https://media1.tenor.com/images/3cde3e1fe79e02abdc287395f57d8578/tenor.gif?itemid=16679443", "https://media3.giphy.com/media/JuyhnRiWcPlAumeXnD/giphy.gif", "https://media1.tenor.com/images/8aaf0058c4a0377fde8d02587a6be370/tenor.gif?itemid=4440541"];
module.exports = {
	name: 'wave',
	description: '',
	arguments: 1,
	usage: '<member>',
	// eslint-disable-next-line no-unused-vars
	async execute(message, args) {

		if (message.mentions.members.first()) {
			const member = message.mentions.members.first();

			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> waves at <@${member.id}>!`)
				.setColor('RANDOM')
				.setImage(`${wavegifs[Math.floor(Math.random() * [wavegifs.length])]}`)
				.setTimestamp();

			message.channel.send(embed);
		}
		else {
			message.reply("Please provide a user mention to wave at!");
		}

	}
};