const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


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
		const outcomes = ['Rock', 'Paper', 'Scissors'];
		const computer = outcomes[Math.floor(Math.random() * [outcomes.length])];
		const selection = interaction.options.getString('choice');
		let result = '';

		if (selection == 'rock' && computer == 'rock') {
			result = 'Draw!';
		}
		else if (selection == 'rock' && computer == 'Paper') {
			result = 'You lost!';
		}
		else if (selection == 'rock' && computer == 'Scissors') {
			result = 'You win!';
		}
		else if (selection == 'scissors' && computer == 'Scissors') {
			result = 'Draw!';
		}
		else if (selection == 'scissors' && computer == 'Paper') {
			result = 'You win!';
		}
		else if (selection == 'scissors' && computer == 'Rock') {
			result = 'You lost!';
		}
		else if (selection == 'paper' && computer == 'Paper') {
			result = 'Draw!';
		}
		else if (selection == 'paper' && computer == 'Rock') {
			result = 'You win!';
		}
		else if (selection == 'paper' && computer == 'Scissors') {
			result = 'You lose!';
		}

		const rpsEmbed = new MessageEmbed()
			.setTitle(result)
			.setColor('#fafbfc')
			.setDescription(`Computer chose ${computer}. You chose ${selection}.`);
		interaction.followUp({ embeds: [rpsEmbed] });

	},
};