const name = 'guildDelete';
const execute = (guild, client) => {

	client.channels.cache.get('813143654998868009').send({ content: `Left server: ${guild.name} (id: ${guild.id}). This server had ${guild.memberCount} members! :()` });

	// guild.systemChannel.send('Hello. I am kekbot! Thanks for inviting me! To get started please use kekhelp, otherwise please join the official server: https://discord.gg/ZjyuywNN7H');
};

export { name, execute };
