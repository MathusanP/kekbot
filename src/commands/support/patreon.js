export const name = 'patreon';
export const description = 'Gives you the link to our patreon!';
export const args = 0;
export const execute = (message) => {

	message.channel.send({ content: "If you wish to support us, you can support us on patreon, this would be greatly appreciated! https://www.patreon.com/kekbotwastaken" });

}