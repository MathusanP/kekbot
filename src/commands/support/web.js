export const name = 'web';
export const aliases = ['site', 'website'];
export const description = 'Gives a link to our cool website!';
export const args = 0;
export const execute = (message) => {

	message.channel.send({ content: 'Here is our website! https://www.kekbot.cf' });

};