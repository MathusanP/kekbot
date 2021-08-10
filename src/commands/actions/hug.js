import { MessageEmbed } from 'discord.js';

const huggifs = [
	"https://media1.tenor.com/images/23f263940d5d2bb8e8eaeb3c128e748f/tenor.gif?itemid=17750778",
	"https://media0.giphy.com/media/sUIZWMnfd4Mb6/200.gif",
	"https://acegif.com/wp-content/gif/anime-hug-38.gif"
];

export const name = 'hug';
export const description = 'Hug a user!';
export const arguments = 1;
export const usage = '<member>';
export async function execute(message) {

	if (message.mentions.members.first()) {
		const member = message.mentions.members.first();

		const embed = new MessageEmbed()
			.setDescription(`${message.author} hugs ${member}!`)
			.setColor('RANDOM')
			.setImage(`${huggifs[Math.floor(Math.random() * [huggifs.length])]}`)
			.setTimestamp();
		message.channel.send({ embeds: [embed] });
	}
	else {
		message.channel.send({ content: "Please provide a user mention to hug!" });
	}

}