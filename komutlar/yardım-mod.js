const Strom = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  const DBL = require('dblapi.js')

  let prefix  = ayarlar.prefix

const yardım = new Strom.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Strom Yardım`)
.setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
**Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
🔧 ban\:  Belirttiğiniz Üyeyi Sunucudan Yasaklar\`\n
🔧 nuke\:  Kanaldaki bütün mesajları siler\`\n
🔧 otorol-sistemi\`otorol komutlarını gösterir\`\n
🔧 ototag\:  Etiketlediğiniz tagı her gelen üyeye verir\`\n
🔧 sunucutanıt\:  Sunucunuzu destek sunucusunda tanıtır.\`\n
🔧 sayaç-ayarla\:  Sunucunuza sayaç ayarlarsınız.\`\n
🔧 kurallar\:  Sunucu için kurallar atar.\`\n
🔧 slowmode\:  sohbet kanalına slowmode atarsınız.\`\n
🔧 servericon\:  sunucu iconunu gösterir.\`\n
🔧 rank\:  Seviyenizi gösterir.\`\n
🔧 sohbet-aç\:  sohbet i yazılabilir hale getirir.\`\n
🔧 sohbet-kapat\:  sohbet i yazılamaz hale getirir.\`\n
🔧 kick-limit\:  kick limiti ayarlarsınız.\`\n
🔧 ban-limit\: ban limiti ayarlarsınız.\`\n
🔧 oylama\: oylama.\`\n
🔧 çoklu-oylama\:  şıklı oylama.\`\n
🔧 hesapla\:  Matematik işlemi.\`\n
`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

      
      }

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['mod',"moderasyon"], 
  permLevel: 0
};

exports.help = {
  name: "moderasyon-sistemi",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'moderasyonhelp'
};