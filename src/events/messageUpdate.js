import { detector } from 'discord.js-ghost-ping';

const name = 'messageUpdate';
const execute = (oldMessage, newMessage) => {

    detector('messageUpdate', oldMessage, newMessage);

}

export { name, execute };