module.exports = (client, error, message) => {

    switch (error) {
        case 'Oynamıyor':
            message.channel.send(`${client.emotes.error} - şuanda oynatılan müzik yok !`);
            break;
        case 'BağlıDeğil':
            message.channel.send(`${client.emotes.error} - ses kanalında değilsin !`);
            break;
        case 'Bağlanılmıyor':
            message.channel.send(`${client.emotes.error} - Ses kanalınıza katılamıyorum, lütfen izinlerimi kontrol edin !`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Bir şeyler ters gitti ... HATA : ${error}`);
    };

};