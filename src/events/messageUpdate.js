const { detector } = require('discord.js-ghost-ping');

module.exports = {
	name: 'messageUpdate',
	once: false,

	execute: async (oldMessage, newMessage) => {

		detector('messageUpdate', oldMessage, newMessage).catch(() => { return; });

	},
};
