export const name = 'bin';
export const description = 'Get a link to source bin.';
export const args = 0;
export const execute = (message) => {

	message.channel.send({ content: "https://sourceb.in" });

}