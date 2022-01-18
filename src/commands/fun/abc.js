const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

module.exports = {
	name: 'abc',
	description: 'Replies with a random letter.',
	usage: '',

	permissions: [],
	ownerOnly: false,
	guildOnly: false,

	error: false,
	execute: ({ interaction }) => {

		interaction.followUp({ content: `${abc[Math.floor(Math.random() * [abc.length])]}` });

	},
};
