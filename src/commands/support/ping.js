export const name = 'ping';
export const description = 'How fast does the bot respond?';
export const args = 0;
export const execute = (message) => {

	message.channel.send({ content: "Awaiting ping..." }).then((m) => {
		m.edit({ content: `Pong! The number no one asked for is ${m.createdTimestamp - message.createdTimestamp}ms.` });
	});

}