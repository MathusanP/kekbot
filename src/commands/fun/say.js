import { Util } from 'discord.js';

export const name = 'say';
export const description = 'Make me repeat your sentence!';
export const aliases = ["repeat"];
export const usage = '<message>';
export const args = 1;
export async function execute(message, args) {

    const userMentions = Util.cleanContent(args.slice(0).join(" "), message);
    const everyoneMentions = Util.removeMentions(userMentions);

    if (everyoneMentions.length > 2000) {
        message.channel.send({ content: 'Sorry, your message was too long. I have a max of 2,000 chars.' });
        return;
    }

    message.channel.send({ content: `${everyoneMentions}\n\n**-  ${message.author.tag}**` });
}

