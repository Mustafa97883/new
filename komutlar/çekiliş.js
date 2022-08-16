const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = async (client, message) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`Strom | Çekiliş `)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      
    )
    .setDescription(
      `🎁 Strom Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Başlat__`,
      `🎉  \`${prefix}başlat\` Sunucudan Bir Çekiliş Başlatabilirsin.`,
      true
    )
   .addField(
      `__Yenile__`,
      `🎉  \`${prefix}reroll\` Çekilişi Yeniden Çeker.`,
      true
    )
    .addField(
      `__Sonlandır__`,
      `🎊 \`${prefix}sonlandır\` Çekilişi Bitir.`,
      true
    )
   
    .addField(
      `__Bilgilendirme__`,
      `<a:yesil:822529538663514173>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:yesil:822529538663514173> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:yesil:822529538663514173> \`${prefix}iletişim\` | QualitySel İletişim Bilgileri.`
    );
  return message.channel.send(embedgenel);
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-sistemi'],
  permLevel: 0
};

exports.help = {
  name: "çekiliş",
  description: "Çekiliş Menüsü",
  usage: "çekiliş"
};
