module.exports = {
	name: 'purge',
	aliases: ["clear", "remove"],
	description: '',
	permissions: ['Manage Messages'],
	arguments: 1,
	usage: '<number>',
	async execute(message, args) {

		if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Mate, your supposed to give me a number.'); }

		if (parseInt(args[0]) > 100) {
			message.reply('Sorry bozo but I can only delete 100 messages');
		}
		else {
			deleteAmount = parseInt(args[0]);
		}

		message.channel.bulkDelete(deleteAmount + 1, true);
		message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`).then(i => i.delete({ timeout: 4000 }));
	}
};

