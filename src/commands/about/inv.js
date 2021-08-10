module.exports = {
	name: 'inv',
	description: 'Gives you a link to invite kekbot on your server!',
	arguments: 0,
	async execute(message) {

		message.channel.send({ content: "You can invite me here: https://dsc.gg/kekinv" });

	}
};