/*const Commando = require('discord.js-commando');
//const words = ["Business", "Cat", "Mongoose", "Alphabet", "Cloud", "Number", "Numbers", "Literal", "Literacy", "Dice", "Fun", "Bread", "East", "North", "South", "Easy", "Hard", "Mode", "Medicore", "Medical", "Taxes", "Gum", "Cold", "Accentuate", "Malicous", "Petrified", "Exquisite", "Precious", "Prestige", "Plasma", "Langauge", "Ruby", "Saphire", "God", "Dog", "Parrot", "Turtle", "Snake", "Discord", "Happy", "Sad", "Food", "Lovely", "Beautiful", "Eventually", "Juxtaposition", "Oxymoron", "Circle", "Square", "Triangle", "Equal", "Less", "Potential", "Potentially", "Possibly", "Visual", "Leave", "Hug", "Cycle", "Climb", "Motor", "War", "Life", "Morale", "Human", "Number", "Long", "Short"];
const words = ["Summer", "Tennis", "Beach", "Sea", "Ocean", "Sun", "Hot", "Suncream", "Sandcastle", "Sand", "Zoo", "Holiday", "Olympics", "Sports", "Watermelon", "Tropical", "Island", "Blue", "Trips", "Family"];

const games = {};

const stages = {
	STARTING: (counter) => {
		return `Listen up people! A new speed typing minigame is going to start in ${counter}s!`;
	},
	IN_GAME: (word) => {
		let spacedWord = '';

		for (const character of [...word]) {
			spacedWord += character;
			spacedWord += ' ';
		}

		return `The new word is **${spacedWord}**!`;
	},
	ENDING: (points) => {
		const sorted = Object.keys(points).sort((a, b) => {
			return points[b] - points[a];
		});

		let results = '';

		for (const key of sorted) {
			const amount = points[key];
			results += `<@${key}> had ${amount} point${amount === 1 ? '' : 's'}\n`;
		}

		return `Alright ya bozo's, time's up, here are the scores:\n\n${results}------------------`;
	},
};

const selectWord = (game) => {
	game.currentWord =
    game.remainingWords[Math.floor(Math.random() * game.remainingWords.length)];

	const index = game.remainingWords.indexOf(game.currentWord);
	game.remainingWords.splice(index, 1);
};

const gameLoop = () => {
	for (const key in games) {
		const game = games[key];
		const { message, stage } = game;

		if (stage === 'STARTING') {
			let string = stages[stage](game.counter);
			message.edit(string);

			if (game.counter <= 0) {
				game.stage = 'IN_GAME';
				game.counter = 60;

				selectWord(game);

				string = stages[game.stage](game.currentWord);
				message.edit(string);
			}
		}
		else if (stage === 'IN_GAME') {
			if (game.counter <= 0) {
				game.stage = 'ENDING';

				const string = stages[game.stage](game.points);
				message.edit(string);

				// Delete the game
				delete games[key];

				continue;
			}
		}

		--game.counter;
	}

	setTimeout(gameLoop, 900);
};

module.exports = class FastTypeGame extends Commando.Command {
	constructor(bot) {
		super(bot, {
			name: 'speedtype',
			group: 'games',
			memberName: 'fasttype',
			description: 'Starts a fast type game'
		});

		bot.on('message', (message) => {
			const { channel, content, member } = message;
			const { id } = channel;

			const game = games[id];

			if (game && game.currentWord && !member.user.bot) {
				message.delete();

				if (
					game.stage === 'IN_GAME' &&
          content.toLowerCase() === game.currentWord.toLowerCase()
				) {
					game.currentWord = null;
					const seconds = 2;

					const { points } = game;
					points[member.id] = points[member.id] || 0;

					message
						.reply(`You won! +1 point (${++points[member.id]} total)`)
						.then((newMessage) => {
							newMessage.delete({
								timeout: 1000 * seconds,
							});
						});

					setTimeout(() => {
						if (game.stage === 'IN_GAME') {
							selectWord(game);

							const string = stages[game.stage](game.currentWord);
							game.message.edit(string);
						}
					}, 1000 * seconds);
				}
			}
		});

		gameLoop();
	}

	async run(message) {
		const { channel } = message;

		message.delete();
		// eslint-disable-next-line no-shadow
		channel.send('Preparing game...').then((message) => {
			games[channel.id] = {
				message,
				stage: 'STARTING',
				counter: 5,
				remainingWords: [...words],
				points: {
				},
			};
		});
	}
};
*/