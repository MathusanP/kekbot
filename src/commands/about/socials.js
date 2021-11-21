import { MessageEmbed } from 'discord.js';

export const name = 'socials';
export const description = 'Get links to all of my social medias.';
export const args = 0;
export const alias = ['social'];
export const execute = (message) => {

	const embed = new MessageEmbed()
		.setColor('RANDOM')
		.setDescription('Here are my socials!')
		.addFields(
			{ name: '**Twitter:**', value: 'https://twitter.com/k3kbot', inline: true },
			{ name: '**Instagram:**', value: 'https://www.instagram.com/k3kbot/', inline: true },
		)
		.setFooter('Email: kekbot6@gmail.com');

	message.channel.send({ embeds: [embed] });

};