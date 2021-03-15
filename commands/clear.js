module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Oi, wtf are you thinking! You do not have the perms for this command!');

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('mate, your supposed to give me a number.') }

    if (parseInt(args[0]) > 100 ){
        message.reply('Sorry bozo but I can only delete 100 messages')
    }  else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount +1, true);
    message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
}

module.exports.config = {
    name: 'purge',
    usage: 'kekpurge',
    aliases: ["clear","remove"]
}