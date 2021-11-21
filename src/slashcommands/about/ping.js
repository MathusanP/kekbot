import { MessageEmbed } from "discord.js";

export const name = 'ping';
export const description = 'How fast does the bot respond?';
export const args = 0;
export const execute = (interaction, client) => {
	const embed = new MessageEmbed()
		.setTitle(`Pong!`)
		.setDescription(`The number no one has asked for is: ${client.ws.ping}ms.`)
		.setColor(`RANDOM`)
		.setTimestamp();
    interaction.reply({ embeds: [embed] });

}