const { MessageEmbed } = require('discord.js');


module.exports.run =  (message) => {

    const content = message.content.replace('kekstatus ', '')
    // Replace "s!!" with your bot's prefix
    
    message.client.user.setPresence({ status: `${content}`})

    const sentembed = new MessageEmbed()
    .setDescription(`${success} Changed Presence!`)
    .setColor('#4CAF50');
    message.channel.send(sentembed)
    process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
  }
    
module.exports.config = {
    name: "status",
    description: "Change the bot's status to; online, idle, or dnd",
    aliases: ["s"]
}