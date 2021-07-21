const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = {
	name: 'npm',
	usage: 'Search npm packages',
	aliases: ["pkgsearch", "packagesearch"],
	arguments: 0,
	async execute(message, args) {

		const name = args[0];

		if(!name) return message.reply('Please provide a package name!');


		const pkg = await pop.npm(name);
		const embed = new Discord.MessageEmbed();

		embed.setTitle(pkg.name)
			.setColor('RANDOM')
			.setURL(`https://npmjs.com/package/${pkg.name}`)
			.setDescription(pkg.description)
			.addField('Author', pkg.author, true)
			.addField('Email', pkg.author_email, true)
			.addField("Downloads This Year", pkg.downloads_this_year, true)
			.addField("Last Publish", pkg.last_published, true)
			.addField('Version', pkg.version, true)
			.addField('Repository', pkg.repository, true)
			.addField('Maintainers', pkg.maintainers, true)
			.addField('Keywords', pkg.keywords, true)
			.setTimestamp();

		message.channel.send(embed);

	}
};