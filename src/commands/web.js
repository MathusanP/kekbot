module.exports = {
	name: 'web',
	aliases: ['site', 'website'],
	description: '',
	arguments: 0,
	async execute(message, args, prefix, client) {
		message.channel.send("Here is our website! https://kekweb.bagelwastaken.repl.co/")
	}
}