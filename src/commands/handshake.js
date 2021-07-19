const Discord = require('discord.js');

module.exports = {
	name: 'handshake',
    description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {

		if (!args[0]) {
            message.reply("Please provide a user mention to handhshake!")
        } 
        else if (message.mentions.members.first()) {
            const member = message.mentions.members.first()
            const embed = new Discord.MessageEmbed()
            embed.setDescription(`<@${message.author.id}> shakes hand with <@${member.id}>!`)
            embed.setColor('RANDOM')
            embed.setImage(`https://giffiles.alphacoders.com/138/138824.gif`)
            embed.setTimestamp()
            message.channel.send(embed)
        }
  	}
}