import { detector } from 'discord.js-ghost-ping';

const name = 'messageUpdate';
const execute = (oldMessage, newMessage) => {

    detector("messageUpdate", oldMessage, newMessage).catch(() => {});

}

export { name, execute };