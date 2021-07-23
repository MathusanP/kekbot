module.exports = {
	name: 'guildCreate',
	async execute(guild, client) {
		client.channels.cache.get('813143654998868009').send(`New server joined: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!`);
		let defaultChannel;
		guild.channels.cache.forEach((channel) => {
			if (channel.type == "text" && defaultChannel == "") {
				if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
					defaultChannel = channel;
				}
			}
		});

		defaultChannel.send(`Support server:  https://discord.gg/pyznqufsaz`, {
			embed: {
				color: 0x2471a3,
				description: "Hello! Thanks for adding kekbot! To get started use kekhelp!",
				image: 'https://media.tenor.com/images/8e8886cf7dfe0f729b7a684c6f59bf8a/tenor.gif'
			}
		});
	}
};