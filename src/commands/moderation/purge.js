module.exports = {
	name: 'purge',
	aliases: ["clear", "remove"],
	description: 'Deletes a given number of messages from the channel',
	permissions: ['Manage Messages'],
	arguments: 1,
	usage: '<number>',
	async execute(message, args) {

		if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
			return message.channel.send({ content: 'Mate, your supposed to give me a number.' });
		}

		if (parseInt(args[0]) > 100) {
			message.reply({ content: 'Sorry dude but I can only delete 100 messages' });
			return;
		}

		const deleteAmount = parseInt(args[0]);

		message.channel.bulkDelete(deleteAmount + 1, true);
		message.channel.send({ content: `Deleted ***${deleteAmount}*** Messages.` }).then(i => i.delete({ timeout: 5000 }));
	}
};