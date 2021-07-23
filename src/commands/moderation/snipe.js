const Discord = require('discord.js');

module.exports = {
	name: 'snipe',
	description: '',
	permissions: ['Manage Messages'],
	arguments: 0,
	usage: '',
	async execute(message, args, prefix, client) {

		const msg = client.snipes.get(message.channel.id);
		const embed = new Discord.MessageEmbed()
			.setAuthor(msg.author, msg.member.user.displayAvatarURL())
			.setDescription(msg.content)
			.setFooter('sucks to be sniped lmbfao')
			.setTimestamp();
		message.channel.send(embed);
	}
};