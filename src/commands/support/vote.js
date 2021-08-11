export const name = 'vote';
export const aliases = ['top.gg'];
export const description = 'Gives you our voting links!';
export const args = 0;
export const execute = (message) => {

	message.channel.send({ content: "You can vote for https://top.gg/bot/734007071686787123" });

}