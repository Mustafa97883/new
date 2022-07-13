module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - **1** ile arasında geçerli bir numara göndermelisiniz. **${tracks.length}** !`);

};