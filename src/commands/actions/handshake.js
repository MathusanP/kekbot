import { MessageEmbed } from 'discord.js';

export const name = 'handshake';
export const description = 'Handshake a user!';
export const args = 1;
export const usage = '<member>';
export const execute = (message) => {


	if (message.mentions.members.first()) {
		const member = message.mentions.members.first();

		const embed = new MessageEmbed()
			.setDescription(`${message.author} shakes hand with ${member}!`)
			.setColor('RANDOM')
			.setImage(`https://giffiles.alphacoders.com/138/138824.gif`)
			.setTimestamp();

		message.channel.send({ embeds: [embed] });

	}
	else {
		message.channel.send({ content: "Please provide a user mention to handhshake!" });
	}

}