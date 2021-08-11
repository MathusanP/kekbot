import { MessageEmbed } from 'discord.js';
import { npm } from "popcat-wrapper";

export const name = 'npm';
export const description = 'Gets information about a npm package';
export const aliases = ["pkgsearch", "packagesearch"];
export const args = 1;
export const usage = '<package name>';
export const execute = async (message, args) => {

	const name = args[0];

	const pkg = await npm(name);
	const embed = new MessageEmbed()

		.setTitle(pkg.name.toString())
		.setColor('RANDOM')
		.setURL(`https://npmjs.com/package/${pkg.name}`)
		.setDescription(pkg.description.toString())
		.addField('Author', pkg.author.toString(), true)
		.addField('Email', pkg.author_email.toString(), true)
		.addField("Downloads This Year", pkg.downloads_this_year.toString(), true)
		.addField("Last Publish", pkg.last_published.toString(), true)
		.addField('Version', pkg.version.toString(), true)
		.addField('Repository', pkg.repository.toString(), true)
		.addField('Maintainers', pkg.maintainers.toString(), true)
		.addField('Keywords', pkg.keywords.toString(), true)
		.setTimestamp();

	message.channel.send({ embeds: [embed] });

}