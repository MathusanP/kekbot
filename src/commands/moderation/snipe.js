const Discord = require('discord.js');

module.exports = {
	name: 'snipe',
	description: 'Snipes the last deleted message (This command is in beta)',
	permissions: ['Manage Messages'],
	arguments: 0,
	async execute(message, args, prefix, client) {

		const msg = client.snipes.get(message.channel.id);
		const embed = new Discord.MessageEmbed()
			.setAuthor(msg.author, msg.member.user.displayAvatarURL())
			.setDescription(`${msg.content}`)
			.setFooter('sucks to be sniped lmfao')
			.setTimestamp();

		message.channel.send({ embeds: [embed] });
	}
};