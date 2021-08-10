export const name = 'join';
export const description = 'Sends you a invite to our server!';
export const arguments = 0;
export async function execute(message) {

	message.channel.send({ content: "`Here is our community discord:` https://discord.gg/pdxkeAe . `Our support discord is`: https://discord.gg/pyznqufsaz" });

}