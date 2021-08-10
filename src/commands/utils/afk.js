const db = require('quick.db');
const Discord = require('discord.js');

const afkgif = [
	"https://media.tenor.com/images/df51877535a3e38c9cccd2f23ff154a2/tenor.gif",
	"https://thumbs.gfycat.com/SomeJoyousDove-size_restricted.gif",
	"https://i.pinimg.com/originals/05/83/a4/0583a451c6b0e59f1892e2d38bca5685.gif"
];
const afkexitgif = [
	"https://media.tenor.com/images/0312d81fd79a45df1e6fcc60ec747431/tenor.gif",
	"https://i.pinimg.com/originals/cc/d1/d5/ccd1d5649c54315a4100497a40f31ad9.gif",
	"https://thumbs.gfycat.com/SmugHatefulArmyworm-max-1mb.gif"
];

module.exports = {
	name: 'afk',
	description: 'Makes you afk, anyone who pinges you will be notified that your afk , use kekafk to leave afk',
	arguments: 0,
	usage: '[reason]',
	async execute(message, args) {

		const status = new db.table("Afks");
		let afk = await status.fetch(message.author.id);
		const embed = new Discord.MessageEmbed().setColor('RANDOM');

		if (!afk) {
			embed.setDescription(`**${message.author.tag}** is now AFK.`)
				.setImage(`${afkgif[Math.floor(Math.random() * [afkgif.length])]}`)
				.setTimestamp();
			status.set(message.author.id, args.join(" ") || `AFK`);
		}
		else {
			embed.setDescription("You are no longer AFK")
				.setImage(`${afkexitgif[Math.floor(Math.random() * [afkexitgif.length])]}`)
				.setTimestamp();
			status.delete(message.author.id);
		}
		message.channel.send({ embeds: [embed] });
	}
};