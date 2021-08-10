import { detector } from 'discord.js-ghost-ping';

export const name = 'messageUpdate';
export async function execute(oldMessage, newMessage) {

    detector('messageUpdate', oldMessage, newMessage);

}