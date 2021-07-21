module.exports = {
	name: 'messageDelete',
	async execute(message, client) {

		client.snipes.set(message.channel.id, {
			content: message.content,
			author: message.author.tag,
			member: message.member,
			image: message.attachments.first() ? message.attachments.first().proxyURL : null
		});
	}
};