module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} Sıraya eklendi (**${playlist.items.length}** şarkılar) !`);

};