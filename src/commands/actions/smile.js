import { MessageEmbed } from 'discord.js';

const smilegifs = [
	'https://c.tenor.com/UDjXV1KPMdkAAAAM/charlie-brown-smile.gif',
	'https://media1.giphy.com/media/blEl99OgPQnNS/200w.gif?cid=82a1493b0iwzksvvxvjue6oq00wmj99f2rj609ja16bn739e&rid=200w.gif&ct=g',
	'https://media2.giphy.com/media/11ezOCtJ7Eetri/200.gif',
];

export const name = 'smile';
export const description = 'smile at a user!';
export const args = 1;
export const usage = '<member>';
export const execute = (message) => {

	if (message.mentions.members.first()) {

		const member = message.mentions.members.first();
		const embed = new MessageEmbed()
			.setDescription(`${message.author} smiles at ${member}!`)
			.setColor('RANDOM')
			.setImage(`${smilegifs[Math.floor(Math.random() * [smilegifs.length])]}`)
			.setTimestamp();
		message.channel.send({ embeds: [embed] });
	}
	else {
		message.channel.send({ content: 'Please provide a user mention to smile at!' });
	}

};