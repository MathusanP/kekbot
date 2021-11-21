export const name = 'purge';
export const aliases = ['clear', 'remove'];
export const description = 'Deletes a given number of messages from the channel';
export const permissions = ['Manage Messages'];
export const args = 1;
export const usage = '<number>';
export const execute = (message, args) => {

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
};