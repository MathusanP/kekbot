const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export const name = 'abc';
export const description = 'generates a random English letter!';
export const arguments = 0;
export async function execute(message) {

	message.channel.send({ content: `${abc[Math.floor(Math.random() * [abc.length])]}` });

}