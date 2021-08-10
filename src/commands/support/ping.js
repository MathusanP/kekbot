export const name = 'ping';
export const description = 'How fast does the bot respond?';
export const arguments = 0;
export async function execute(message) {

	const m = await message.channel.send({ content: "Awaiting ping..." });
	m.edit({ content: `Pong! The number no one asked for is ${m.createdTimestamp - message.createdTimestamp}ms.` });

}