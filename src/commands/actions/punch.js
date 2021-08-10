import { MessageEmbed } from 'discord.js';

const punchgif = [
	"https://i.pinimg.com/originals/66/76/7a/66767af902113b20978f5880593b29af.gif",
	"https://i.imgur.com/f2kkp3L.gif",
	"https://media2.giphy.com/media/arbHBoiUWUgmc/200.gif"
];

export const name = 'punch';
export const description = 'Punch a user!';
export const arguments = 1;
export async function execute(message) {

	if (message.mentions.members.first()) {

		const member = message.mentions.members.first();
		const embed = new MessageEmbed()
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