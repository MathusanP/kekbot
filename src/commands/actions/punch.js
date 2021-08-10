const Discord = require('discord.js');

const punchgif = [
	"https://i.pinimg.com/originals/66/76/7a/66767af902113b20978f5880593b29af.gif",
	"https://i.imgur.com/f2kkp3L.gif",
	"https://media2.giphy.com/media/arbHBoiUWUgmc/200.gif"
];

module.exports = {
	name: 'punch',
	description: 'Punch a user!',
	arguments: 1,
	async execute(message) {

		if (message.mentions.members.first()) {

			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setDescription(`${message.author} punches ${member}!`)
				.setColor('RANDOM')
				.setImage(`${punchgif[Math.floor(Math.random() * [punchgif.length])]}`)
				.setTimestamp();
			message.channel.send({ embeds: [embed] });
		}
		else {
			message.channel.send({ content: "Please provide a user mention to punch!" });
		}

	}
};