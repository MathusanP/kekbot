const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const possibleAnswers = [
	'That is a no from me.',
	'Yees.',
	'No.',
	'???',
	'It is certain.',
	'It is decidedly so.',
	'Most likely.',
	'My reply is no.',
	'My sources say no.',
	'Reply hazy, try again.',
	'Signs point to yes.',
	'Very doubtful.',
	'Without a doubt.',
];

module.exports = {
	name: '8ball',
	description: 'Ask the all knowing, magic 8ball a question!',
	usage: '<question>',

	permissions: [],
	ownerOnly: false,
	guildOnly: false,

	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Ask the all knowing, magic 8ball a question!')

		.addStringOption(option => option.setName('question').setDescription('What is your question').setRequired(true)),

	error: false,
	execute: async ({ interaction }) => {

		const embed = new EmbedBuilder()
			.setTitle('Magic 8 Ball')
			.addFields(
				{ name: '**Your Question:**', value: `${interaction.options.getString('question')}` },
				{ name: '**My Answer**', value: `${possibleAnswers[Math.floor((Math.random() * possibleAnswers.length) + 0)]}` },
			)
			.setColor('Random')
			.setThumbnail('https://i.imgur.com/SD5OXUV.jpg')
			.setFooter({ text: 'Powered by automod#8328' });

		interaction.followUp({ embeds: [embed] });

	},
};