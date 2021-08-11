import { MessageEmbed } from 'discord.js';

export const name = 'snipe';
export const description = 'Snipes the last deleted message (This command is in beta)';
export const permissions = ['Manage Messages'];
export const args = 0;
export const execute = (message, args, prefix, client) => {

	const msg = client.snipes.get(message.channel.id);
	const embed = new MessageEmbed()
		.setAuthor(msg.author, msg.member.user.displayAvatarURL())
		.setDescription(`${msg.content}`)
		.setFooter('sucks to be sniped lmfao')
		.setTimestamp();

	message.channel.send({ embeds: [embed] });
}