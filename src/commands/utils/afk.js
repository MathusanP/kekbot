const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
	name: 'afk',
	aliases: [],
	description: '',
	arguments: 0,
	async execute(message, args) {

		const status = new db.table("Afks");
		let afk = await status.fetch(message.author.id);
		const embed = new Discord.MessageEmbed().setColor('RANDOM');
		if (!afk) {
			embed.setDescription(`**${message.author.tag}** is now AFK.`);
			status.set(message.author.id, args.join(" ") || `AFK`);
			embed.setImage(`https://media.tenor.com/images/df51877535a3e38c9cccd2f23ff154a2/tenor.gif`);
			embed.setTimestamp();
		}
		else {
			embed.setDescription("You are no longer AFK");
			embed.setImage(`https://media.tenor.com/images/0312d81fd79a45df1e6fcc60ec747431/tenor.gif`);
			embed.setTimestamp();
			status.delete(message.author.id);
		}
		message.channel.send(embed);
	}
};