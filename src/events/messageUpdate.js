const { detector } = require('discord.js-ghost-ping');

module.exports = {
	name: 'messageUpdate',
	async execute(oldMessage, newMessage) {

		await detector('messageUpdate', oldMessage, newMessage);

	}
};