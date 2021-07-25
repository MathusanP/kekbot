const Discord = require('discord.js');
const kissgifs = ["https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif", "https://media1.tenor.com/images/2f23c53755a5c3494a7f54bbcf04d1cc/tenor.gif?itemid=13970544", "https://i.pinimg.com/originals/66/19/1b/66191b81d5bf6c70bd065736f3e8662b.gif"];
module.exports = {
	name: 'kiss',
	description: '',
	arguments: 1,
	usage: '<member>',
	async execute(message) {

		if (message.mentions.members.first()) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> kisses <@${member.id}>!`)
				.setColor('RANDOM')
				.setImage(`${kissgifs[Math.floor(Math.random() * [kissgifs.length])]}`)
				.setTimestamp();
			message.channel.send(embed);
		}
		else {
			message.reply("Please provide a user mention to kiss!");
		}

	}
};