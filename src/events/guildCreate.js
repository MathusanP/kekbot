module.exports = {
	name: 'guildCreate',
	once: false,
	execute: async (guild, client) => {
		if (guild.id == '1004919883387121664') return;
		client.channels.cache.get('935977503363858442').send({ content: `New server joined: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!` });

		// guild.systemChannel.send('Hello. I am kekbot! Thanks for inviting me! To get started please use kekhelp, otherwise please join the official server: https://discord.gg/ZjyuywNN7H');
	},
};