export const name = 'inv';
export const description = 'Gives you a link to invite kekbot on your server!';
export const arguments = 0;
export async function execute(message) {

	message.channel.send({ content: "You can invite me here: https://dsc.gg/kekinv" });

}