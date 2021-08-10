const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 69];

export const name = 'number';
export const description = 'Generates a random number between 1 and 10.';
export const arguments = 0;
export async function execute(message) {

	message.channel.send({ content: `${number[Math.floor(Math.random() * [number.length])]}` });

}