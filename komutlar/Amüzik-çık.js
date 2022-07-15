const Discord = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyDk8AEVKtIDgmhlIhBC51JDFimQKmSk6m0');

exports.run = async (client, message, args) => {
    const queue = client.queue;

    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;

    const err1 = new Discord.MessageEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**`)  
    if (!voiceChannel) return message.channel.send(err1);
    const err2 = new Discord.MessageEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:x: Şu anda çalan şarkı yok.`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new Discord.MessageEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:mailbox_with_no_mail: Bağlantı başarıyla kesildi`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
};

exports.conf = {
    enabled: true,
    aliases: ['çık',"ayrıl"],
    permLevel: 0
};

exports.help = {
    name: 'disconnect',
    description: 'Botu Kanaldan Çıkartır ve Şarkıyı Kapatır.',
    usage: 'botçık'
}; 