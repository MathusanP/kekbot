const Discord = require('discord.js');

module.exports = {
	name: 'handshake',
	description: '',
	arguments: 1,
	usage: '<member>',
	async execute(message, args) {


		if (message.mentions.members.first()) {
			const member = message.mentions.members.first();

			const embed = new Discord.MessageEmbed()
				.setDescription(`<@${message.author.id}> shakes hand with <@${member.id}>!`)
				.setColor('RANDOM')
				.setImage(`https://giffiles.alphacoders.com/138/138824.gif`)
				.setTimestamp();
			message.channel.send(embed);

		}
		else{
			message.reply("Please provide a user mention to handhshake!");
		}

	}
};