import { MessageEmbed } from 'discord.js';

const patgifs = [
	"https://media.tenor.com/images/8237d7da8cbd7227d67d735d437612cf/tenor.gif",
	"https://66.media.tumblr.com/84089922967b096420e340b32b9d97a6/tumblr_p679qztw1p1srt81jo3_500.gif",
	"https://i.pinimg.com/originals/c2/23/2a/c2232aec426d8b5e85e026cbca410463.gif"
];

export const name = 'pat';
export const description = 'Pat a user!';
export const arguments = 1;
export const usage = '<member>';
export async function execute(message) {

	if (message.mentions.members.first()) {
		const member = message.mentions.members.first();
		const embed = new MessageEmbed()
			.setDescription(`${message.author} pats ${member}!`)
			.setColor('RANDOM')
			.setImage(`${patgifs[Math.floor(Math.random() * [patgifs.length])]}`)
			.setTimestamp();
		message.channel.send({ embeds: [embed] });

	}
	else {
		message.channel.send({ contents: "Please provide a user mention to pat!" });
	}

}