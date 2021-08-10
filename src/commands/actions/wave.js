import { MessageEmbed } from 'discord.js';

const wavegifs = [
	"https://media1.tenor.com/images/3cde3e1fe79e02abdc287395f57d8578/tenor.gif?itemid=16679443",
	"https://media3.giphy.com/media/JuyhnRiWcPlAumeXnD/giphy.gif",
	"https://media1.tenor.com/images/8aaf0058c4a0377fde8d02587a6be370/tenor.gif?itemid=4440541"
];

export const name = 'wave';
export const description = 'Wave at a user!';
export const arguments = 1;
export const usage = '<member>';
export async function execute(message) {

	if (message.mentions.members.first()) {
		const member = message.mentions.members.first();

		const embed = new MessageEmbed()
			.setDescription(`${message.author} waves at ${member}!`)
			.setColor('RANDOM')
			.setImage(`${wavegifs[Math.floor(Math.random() * [wavegifs.length])]}`)
			.setTimestamp();

		message.channel.send({ embeds: [embed] });
	}
	else {
		message.channel.send({ content: "Please provide a user mention to wave at!" });
	}

}