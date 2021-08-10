const { detector } = require('discord.js-ghost-ping');

module.exports = {
	name: 'messageDelete',
	async execute(message, client) {

		await detector('messageDelete', message);

		client.snipes.set(message.channel.id, {
			content: message.content,
			author: message.author.tag,
			member: message.member,
			image: message.attachments.first() ? message.attachments.first().proxyURL : null
		});
	}
};