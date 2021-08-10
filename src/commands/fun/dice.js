const Discord = require('discord.js');

const rolls = [
	"https://cdn.discordapp.com/attachments/772628353421017118/816404787750109234/15i3bBsz_bMcGQ-UgDMCzQA.png",
	"https://cdn.discordapp.com/attachments/772628353421017118/816404837175918593/1dqZhjZbsbEBDXzKQPAagXw.png",
	"https://cdn.discordapp.com/attachments/772628353421017118/816404895669157891/1DrPdeWaJON0XbtmiEZc3jw.png",
	"https://cdn.discordapp.com/attachments/772628353421017118/816404984089411594/15w7bpE0KdwXc21zUQoOtOw.png",
	"https://cdn.discordapp.com/attachments/772628353421017118/816405032613183518/1UYR8l1h7AI4MNtJWAugyjg.png",
	"https://cdn.discordapp.com/attachments/772628353421017118/816405080273846292/115_KIo9vPHULoA98NYT9jQ.png"
];

module.exports = {
	name: "diceroll",
	description: "diceroll | Roll a die.",
	aliases: ["dice", "roll", "dr"],
	arguments: 0,
	async execute(message) {

		const result = (Math.floor(Math.random() * Math.floor(6) + 1));

		const dicerollEmbed = new Discord.MessageEmbed()
			.setTitle(`You rolled a **${result}**`)
			.setColor("RANDOM")
			.setFooter(`${message.author.username}`)
			.setThumbnail(`${rolls[result - 1]}`)
			.setTimestamp();

		message.channel.send({ embeds: [dicerollEmbed] });
	}
};