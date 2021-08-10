export const name = 'ready';
export async function execute(client) {

	console.log(`kekbot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

	client.user.setPresence({
		status: "online",
		activities: [{ type: `WATCHING`, name: `summer update - kekhelp` }]
	});

}