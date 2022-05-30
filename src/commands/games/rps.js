// This command is currently undergoing iterative testing, it will be tested as we add on to it.
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const outcomes = ['Rock', 'Paper', 'Scissors'];
const computer = outcomes[Math.floor(Math.random() * [outcomes.length])];

module.exports = {
	name: 'rps',
	description: 'Play rock paper scissors against the bot!',
	usage: '[user]',

	permissions: [],
	ownerOnly: false,
	guildOnly: false,

	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription('Play rock paper scissors against the bot!')
		.addStringOption(option => option
			.setName('choice')
			.setRequired(true)
			.addChoice('Rock', 'rock')
			.setDescription('Use rock')
			.addChoice('Paper', 'paper')
			.setDescription('Use paper ')
			.addChoice('Scissors', 'scissors')
			.setDescription('Use Scissors'),
		),

	error: false,
	execute: ({ interaction }) => {
		const selection = interaction.options.getString('choice');
		const rpsEmbed = new MessageEmbed()
			.setColor('#fafbfc')
			.setDescription(`Computer chose ${computer}. You chose ${selection}.`);
		interaction.followUp({ embeds: [rpsEmbed] });

	},
};