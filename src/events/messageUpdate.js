const { detector } = require('discord.js-ghost-ping');

module.exports = {
	name: 'messageUpdate',
	once: false,

	execute: async (oldMessage, newMessage) => {

		await detector('messageUpdate', oldMessage, newMessage);

	},
};
