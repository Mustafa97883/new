const Strom = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  let prefix  = ayarlar.prefix

const yardım = new Strom.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Strom Guard Sistemi`)
.setAuthor(``)
.setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
**Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
🔰 \`${prefix}kanal-koruma\` : **Kanal Koruma Aç/Kapat**
🔰 \`${prefix}küfür-engel\`:  **Küfür Engel Aç/Kapat**
🔰 \`${prefix}reklam-engel\` :  **Reklam Engel Aç/Kapat**
🔰 \`${prefix}Antiraid\` :  **Antiraid sistemini Açıp Kapatırsınız**
🔰 \`${prefix}caps-engel\` :  **Büyük harf engeli**
🔰 \`${prefix}spam-engel\` :  **Spam yapanları durdurur**
🔰 \`${prefix}everhereengel\` :  **@everyone @here engeli atar**
🔰 \`${prefix}isim-reklam-koruma\`:  **Kullanıcının isminde reklam varsa onu sunucudan banlar**
🔰 \`${prefix}sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
🔰 \`${prefix}ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
🔰 \`${prefix}unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
🔰 \`${prefix}istatistik\`:  **Botun İstatistiklerini Atar**
🔰 \`${prefix}temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
🔰 \`${prefix}ping\`:  **Pinginizi Ölçüp Atar**

`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['guardyardım','guard'], 
  permLevel: 0
};

exports.help = {
  name: "guard-sistemi",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'guardhelp'
};