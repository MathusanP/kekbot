client.interactions = new Discord.Collection();
    const s_categories = fs.readdirSync(`${__dirname}/slashcommands/`);
    for (const category of s_categories) {
        const commandFiles = fs.readdirSync(`${__dirname}/slashcommands/${category}`).filter(File => File.endsWith('.js'));
        for (const file of commandFiles) {
            const command = await import(`${__dirname}/slashcommands/${category}/${file}`);
            client.interactions.set(command.name, command);
    }
}
    