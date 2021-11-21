export const name = 'ban';
export const description = 'Ban a member from your server!';
export const permissions = ['BAN_MEMBERS'];
export const args = 1;
export const usage = '<member> [reason]';
export const execute = async (message, args) => {
	const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
	if (member) {
		try {
			await message.guild.members.ban(member);
		}
		catch (err) {
			message.channel.send({ content: `Hmmm, I can't seem to kick ${member}! This could be due to ${member} being higher in the role hierachy, or because I don't have permissions to ban or kick people.` });
			return;
		}

		message.channel.send({ content: `:wave: ${member} has been banned!` });

	}
};