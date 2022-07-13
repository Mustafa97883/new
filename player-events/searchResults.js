module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `İşte arama sonuçlarınız ${query}` },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};