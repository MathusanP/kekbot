const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
	name: 'rps',
	description: 'Play rock paper scissors against the bot!',
	usage: '<choice>',

	permissions: [],
	ownerOnly: false,
	guildOnly: false,

	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription('Play rock paper scissors against the bot!')

		.addStringOption(option => option.setName('choice').setDescription('Chose Rock, Paper or Scissors!').setRequired(true).addChoices(
			{ name: 'Rock', value: 'rock' }, { name: 'Paper', value: 'paper' }, { name: 'Scissors', value: 'scissors' }),
		),

	error: false,
	execute: ({ interaction }) => {

		const outcomes = ['Rock', 'Paper', 'Scissors'];
		const computer = outcomes[Math.floor(Math.random() * [outcomes.length])];
		const selection = interaction.options.getString('choice');

		/* Select the winning result */
		let result = '';
		if (selection == computer) result = 'Draw!';
		else if (selection == 'rock') result = computer == 'Paper' ? 'You Lost!' : 'You Won!';
		else if (selection == 'scissors') result = computer == 'Rock' ? 'You Lost!' : 'You Won!';
		else if (selection == 'paper') result = computer == 'Scissors' ? 'You Lost!' : 'You Won!';

		const rpsEmbed = new EmbedBuilder()
			.setTitle(result)
			.setColor('#fafbfc')
			.setDescription(`Computer chose **${computer}**. You chose **${selection}**.`);
		interaction.followUp({ embeds: [rpsEmbed] });

	},
};