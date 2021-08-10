import { MessageEmbed } from 'discord.js';
import got from 'got';

export const name = "quote";
export const aliases = ["quotes"];
export const description = 'Fetches a quote from r/quotes';
export const arguments = 0;
export async function execute(message) {

	got('https://www.reddit.com/r/quotes/random/.json').then(response => {
		const content = JSON.parse(response.body);

		const embed = new MessageEmbed()
			.setTitle(`${content[0].data.children[0].data.title}`)
			.setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`)
			.setColor('RANDOM')
			.setImage(`${content[0].data.children[0].data.url}`)
			.setFooter(`👍 ${content[0].data.children[0].data.ups} 💬 ${content[0].data.children[0].data.num_comments}`);

		message.channel.send({ embeds: [embed] });

	});
}