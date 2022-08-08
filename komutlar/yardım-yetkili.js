const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
let botid = "756883309270663229";
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
 
  
  const embed = new Strom.MessageEmbed()
    .setAuthor(
      `${client.user.username} `,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("#d02090")
    .setTitle(` **Strom Bot Yardım Menüsüne Hoşgeldiniz** `)
    .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
  **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
🛡️ **s!uyarı**  \`bir kullanıcıya uyarı puanı verirsiniz..\` \n
🛡️ **s!uyarı-sil**  \`bir kullanıcıdan uyarı puanı silersiniz.\` \n
🛡️ **s!uyarılar**  \`bir kullanıcının uyarılarına bakarsınız.\`\n
🛡️ **s!sicil**  \`bir kullanıcının siciline bakarsınız.\` \n
🛡️ **s!mute**  \`bir kullanıcıyı susturursunuz.\` \n
🛡️ **s!kurallar**\`sunucu kuralı eklersiniz. \`\n
🛡️ **s!kick-limit**\`kick limiti belirlersiniz.\` \n
🛡️ **s!ban-limit**\`ban limiti belirlersiniz.\` \n
🛡️ **s!ban**\`sunucudaki birini banlarsınız.\` \n
🛡️ **s!kick**\`sunucudaki birini kicklersiniz.\` \n
`
    
    
  )
    .setFooter( "Strom / Discord'da Yeni Devrim!", client.user.avatarURL())
  return message.channel.send(embed);

      
    
      }


  
  
  
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yetkiliyardım","yetkili-yardım"],
  permLevel: 0
};

exports.help = {
  name: "yatkili-yardım",
  description: "a!davet-sistemi Menüsü",
  usage: "yetkili-yardım"
};
