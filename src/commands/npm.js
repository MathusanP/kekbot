const Discord = require('discord.js')
const pop = require("popcat-wrapper")

module.exports = {
	name: 'npm',
    usage: 'Search npm packages',
    aliases: ["pkgsearch", "packagesearch"],
	arguments: 0,
	async execute(message, args, prefix, client) {

        const messageArray = message.content.split(' ');
        const args = messageArray.slice(1);    
        const name = args[0]

        if(!name) return message.reply('Please provide a package name!')


        const pkg = await pop.npm(name)
        const embed = new Discord.MessageEmbed();

        embed.setTitle(pkg.name)
        embed.setColor('RANDOM')
        embed.setURL(`https://npmjs.com/package/${pkg.name}`)
        embed.setDescription(pkg.description)
        embed.addField('Author', pkg.author, true)
        embed.addField('Email', pkg.author_email, true)
        embed.addField("Downloads This Year", pkg.downloads_this_year, true)
        embed.addField("Last Publish", pkg.last_published, true)
        embed.addField('Version', pkg.version, true)
        embed.addField('Repository', pkg.repository, true)
        embed.addField('Maintainers', pkg.maintainers, true)
        embed.addField('Keywords', pkg.keywords, true)
        embed.setTimestamp()

        message.channel.send(embed)

    }
}
