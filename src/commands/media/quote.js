const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'quote',
	description: 'Shows a reddit quote from r/quotes',
	usage: '',

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Shows a post from r/quotes!'),

	error: false,
	execute: async ({ interaction }) => {
		const { got } = await import('got');

		got('https://www.reddit.com/r/quotes/random/.json').then(response => {
			const content = JSON.parse(response.body);

			const embed = new EmbedBuilder()
				.setTitle(`${content[0].data.children[0].data.title}`)
				.setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`)
				.setColor('Random')
				.setImage(`${content[0].data.children[0].data.url}`)
				.setFooter({ text: `👍 ${content[0].data.children[0].data.ups} 💬 ${content[0].data.children[0].data.num_comments}` });

			interaction.followUp({ embeds: [embed] });

		}).catch(() => interaction.followUp({ content: 'Sorry, an error occured with that command.' }));
	},
};
