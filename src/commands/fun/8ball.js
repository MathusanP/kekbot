import { MessageEmbed } from 'discord.js';

const possibleAnswers = [
	`As I see it, yes.`,
	`Ask again later.`,
	`Better not tell you now.`,
	`Cannot predict now.`,
	`Concentrate and ask again.`,
	`Don’t count on it.`,
	`It is certain.`,
	`It is decidedly so.`,
	`Most likely.`,
	`My reply is no.`,
	`My sources say no.`,
	`Outlook not so good.`,
	`Outlook good.`,
	`Reply hazy, try again.`,
	`Signs point to yes.`,
	`Very doubtful.`,
	`Without a doubt.`,
	`Yes.`,
	`Yes – definitely.`,
	`You may rely on it.`
];

export const name = '8ball';
export const description = 'Ask a question, and get an answer from the all-knowing, magic 8ball!';
export const aliases = ["8-ball"];
export const arguments = 1;
export const usage = '<question>';
export async function execute(message, args) {

	const embed = new MessageEmbed()
		.setTitle(`Magic 8 Ball`)
		.addField(`**Your Question:**`, `${args.slice(0).join(" ")}`)
		.addField(`**My Answer**`, `${possibleAnswers[Math.floor((Math.random() * 19) + 0)]}`)
		.setColor(`RANDOM`)
		.setThumbnail(`https://i.imgur.com/SD5OXUV.jpg`);

	await message.channel.send({ embeds: [embed] });

}