export const name = 'bin';
export const description = 'Get a link to source bin.';
export const arguments = 0;
export async function execute(message) {

	message.channel.send({ content: "https://sourceb.in" });

}