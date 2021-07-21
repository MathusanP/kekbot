const Discord = require('discord.js');

module.exports = {
	name: 'pat',
	aliases: [],
	description: '',
	arguments: 0,
	async execute(message, args) {

		if (!args[0]) {
			message.reply("Please provide a user mention to pat!");
		}
		else if (message.mentions.members.first()) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> pats <@${member.id}>!`)
				.setColor('RANDOM')
				.setImage(`https://media.tenor.com/images/8237d7da8cbd7227d67d735d437612cf/tenor.gif`)
				.setTimestamp();
			message.channel.send(embed);
		}
	}
};