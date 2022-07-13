exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - bir ses kanalında değilsin !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalan müzik yok !`);

    client.player.clearQueue(message);

    message.channel.send(`${client.emotes.success} - Sıra az önce **kaldırıldı** !`);

};