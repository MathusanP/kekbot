export const name = 'privacy';
export const description = 'Gives you a link to invite kekbot on your server!';
export const args = 0;
export const execute = (message) => {

	message.channel.send({ content: 'You can read our privacy policy here: https://sourceb.in/7jziSfYRXH' });

};