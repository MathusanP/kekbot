import { detector } from 'discord.js-ghost-ping';

const name = 'messageDelete';
const execute = (message, client) => {

	detector("messageDelete", message).catch(() => {});

	client.snipes.set(message.channel.id, {
		content: message.content,
		author: message.author.tag,
		member: message.member,
		image: message.attachments.first() ? message.attachments.first().proxyURL : null
	});
}

export { name, execute };