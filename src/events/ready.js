export const name = 'ready';
export const once = true;
export const execute = (client) => {

	console.log(`${client.user.tag} has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

	client.user.setPresence({
		status: "online",
		activities: [{ type: `PLAYING`, name: `Version 3.7 - kekhelp` }]
	});

}