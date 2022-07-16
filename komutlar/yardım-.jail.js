const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Strom Jail sistemi').setDescription(`
\`${prefix}jail-log [#kanalEtiket]\` Jail sistemi için gereklidir. **Jail** kanalını seçmeniz gerekiyor.
\`${prefix}jail-log-kapat\`
\`${prefix}jail-yetkili-role [@rolEtiket]\` Jaili **kullanacak yetkili** rolünü etiketle
\`${prefix}jail-Jail-role [@rolEtiket]\` Jail **Jail rolünü** etiketle`)
.addField('ᅠ', 'ᅠ')
.addField('Jail Komutu', `${prefix}cezalı, ${prefix}Cezalı, ${prefix}jail`)
.addField('Örnek Jail komut', `\`\`\`${prefix}jail @etiket\`\`\``)
.addField('ᅠ', 'ᅠ')// xd
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/d80f45da-14d1-42a7-a16d-8f3385ce86a4/c10f8dedd93c798ce1e36ad9acb26fd4.png?v=1657994146595'));
   
};  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-sistemi'
};