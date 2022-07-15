const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Strom - Müzik Sistemi')
.setDescription(`
**-Çal-** Müzik Açar ( \`s!play\` )
**-Devam-** Şarkıya Devam Eder ( \`s!resume\` )
**-Duraklat-** Şarkıyı Durdurur ( \`s!stop\` )
**-Kapat-** Şarkıyı Kapatır ( \`s!disconnect\` )
**-Geç-** Şarkıyı Geçersiniz ( \`s!skip\` ) `)
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['müzik-sistemi'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım-müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};