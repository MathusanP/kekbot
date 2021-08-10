export const name = 'web';
export const aliases = ['site', 'website'];
export const description = 'Gives a link to our cool website!';
export const arguments = 0;
export async function execute(message) {

	message.channel.send({ content: "Here is our website! https://www.kekbot.cf" });

}