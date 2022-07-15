const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
.setTitle("Strom - Çekiliş Sistemi")
.setColor("PINK")
.setDescription(`
\`${ayarlar.prefix}çekiliş-rol\` Çekiliş yapacak rol ayarlar.
\`${ayarlar.prefix}çekiliş-başlat\` Çekiliş başlatırsın.
\`${ayarlar.prefix}çekiliş-yenile\` Kazanan kişiyi yeniler.
\`${ayarlar.prefix}çekiliş-sonladır\` Yapılan çekilişi bitirir.
\`${ayarlar.prefix}çekiliş-log\` Logların düşeceği kanalı ayarlar.
`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['çekiliş-yardım'],
    permLevel: 0
};

exports.help = {
    name: 'çekiliş-sistemi',
    description: 'çekilişyap.',
    usage: 'çekilişyap'
}