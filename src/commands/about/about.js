const Discord = require('discord.js');

module.exports = {
	name: 'about',
	description: 'shows lots of cool information about the bot.',
	arguments: 0,
	execute(message, args, prefix, client) {

		const servers = client.guilds.cache.size;
		const users = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);

		const uptime = `${Math.floor(client.uptime / 86400000)}d ${Math.floor(client.uptime / 3600000) % 24}h ${Math.floor(client.uptime / 60000) % 60}m ${Math.floor(client.uptime / 1000) % 60}s`;

		const embed = new Discord.MessageEmbed()
			.setTitle("My Information")
			.setColor('RANDOM')
			.setDescription(`Hey, I'm **${client.user.tag}**! My prefix is: \`${prefix}\`\nYou can also mention me as a prefix!`)
			.addFields(

				{ name: `**Total Servers:**`, value:`${servers}`, inline: true },
				{ name: `**Total Users:**`, value: `${users}`, inline: true },
				{ name: `**Total Commands:**`, value: `46`, inline: true },
				{ name: `**Version:**`, value: `3.6.1`, inline: true },
				{ name: `**Developer:**`, value:`**Bagel#1475**\n**[ThatsLiamS#6950](https://github.com/ThatsLiamS)**`, inline: true },
				{ name: `**Uptime:**`, value:`${uptime}`, inline: true },
			)
			.setFooter(`Do '${prefix}help' to get started`);

		message.channel.send({ embeds: [embed] });

	}
};