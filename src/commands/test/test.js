module.exports = {
	name: 'test',
	description: 'Replies with "test"',
	usage: '',
	aliases: [],

	permissions: [],
	ownerOnly: true,
	guildOnly: false,

	error: false,
	execute: ({ interaction }) => {

		interaction.followUp({ content: 'test' });

	},
};