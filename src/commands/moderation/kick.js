export const name = 'kick';
export const description = 'kick a member from your server!';
export const permissions = ['KICK_MEMBERS'];
export const args = 1;
export const usage = '<member> [reason]';
export const execute = (message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(member) {
            try {
                member.kick();
                message.channel.send(`:wave: ${member} has been kicked`)
            }

                catch(err) {
                    message.channel.send(`I was unable to kick ${member}`);
                }
        }
    }

