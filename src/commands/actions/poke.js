import { MessageEmbed } from 'discord.js';

const pokegifs = [
	'https://c.tenor.com/VBn2pTz94Y0AAAAM/poke-poking.gif',
	'https://media0.giphy.com/media/1gQwMNJ9z1mqABgQd3/giphy.gif',
	'https://thumbs.gfycat.com/EnlightenedInferiorAfricanaugurbuzzard-size_restricted.gif',
];

export const name = 'poke';
export const description = 'Poke a user!';
export const args = 1;
export const usage = '<member>';
export const execute = (message) => {

	if (message.mentions.members.first()) {
		const member = message.mentions.members.first();
		const embed = new MessageEmbed()
			.setDescription(`${message.author} pokes ${member}!`)
			.setColor('RANDOM')
			.setImage(`${pokegifs[Math.floor(Math.random() * [pokegifs.length])]}`)
			.setTimestamp();
		message.channel.send({ emebds: [embed] });
	}
	else {
		message.channel.send({ content: 'Please provide a user mention to poke!' });
	}

};