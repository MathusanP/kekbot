const { detector } = require('discord.js-ghost-ping');

module.exports = {
	name: 'messageDelete',
	once: false,

	execute: async (message) => {

		detector('messageDelete', message);

	},
};
