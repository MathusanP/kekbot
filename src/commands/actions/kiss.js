import { MessageEmbed } from 'discord.js';

const kissgifs = [
	'https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif',
	'https://media1.tenor.com/images/2f23c53755a5c3494a7f54bbcf04d1cc/tenor.gif?itemid=13970544',
	'https://i.pinimg.com/originals/66/19/1b/66191b81d5bf6c70bd065736f3e8662b.gif',
];

export const name = 'kiss';
export const description = 'Kiss a user!';
export const args = 1;
export const usage = '<member>';
export const execute = (message) => {

	if (message.mentions.members.first()) {
		const member = message.mentions.members.first();
		const embed = new MessageEmbed()
			.setDescription(`${message.author} kisses ${member}!`)
			.setColor('RANDOM')
			.setImage(`${kissgifs[Math.floor(Math.random() * [kissgifs.length])]}`)
			.setTimestamp();
		message.channel.send({ emebds: [embed] });
	}
	else {
		message.channel.send({ content: 'Please provide a user mention to kiss!' });
	}

};