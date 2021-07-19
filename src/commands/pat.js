module.exports = {
	name: 'pat',
	aliases: [],
	description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {

		if (!args[0]) {
            message.reply("Please provide a user mention to pat!")
        } else if (message.mentions.members.first()) {
            const member = message.mentions.members.first()
            const embed = new Discord.MessageEmbed()
            embed.setDescription(`<@${message.author.id}> pats <@${member.id}>!`)
            embed.setColor('RANDOM')
            embed.setImage(`https://media.tenor.com/images/8237d7da8cbd7227d67d735d437612cf/tenor.gif`)
            embed.setTimestamp()
            message.channel.send(embed)
        }
	}
}