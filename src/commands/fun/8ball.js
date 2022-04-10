const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const possibleAnswers = [
	'Hohoho... no.',
	'Yees.',
	'No.',
	'Hohoho...',
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
	usage: '`/8ball <question>`',

	permissions: [],
	ownerOnly: false,
	guildOnly: false,

	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Ask the all knowing, magic 8ball a question!')
		.addStringOption(option => option
			.setName('question')
			.setDescription('What is your question')
			.setRequired(true),
		),

	error: false,
	execute: async ({ interaction }) => {

		const embed = new MessageEmbed()
			.setTitle('Magic 8 Ball')
			.addField('**Your Question:**', `${interaction.options.getString('question')}`)
			.addField('**My Answer**', `${possibleAnswers[Math.floor((Math.random() * possibleAnswers.length) + 0)]}`)
			.setColor('RANDOM')
			.setThumbnail('https://i.imgur.com/SD5OXUV.jpg')
			.setFooter({ text: 'Powered by automod#8328' });

		interaction.followUp({ embeds: [embed] });

	},
};