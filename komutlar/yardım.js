const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
let botid = "756883309270663229";

exports.run = async (client, message, args) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
  
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";


  
  
  const embed = new Strom.MessageEmbed()
    .setAuthor(
      `${client.user.username} `,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("#d02090")
    .setTitle(` **Strom Bot Yardım Menüsüne Hoşgeldiniz** `)
    .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
  **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  
  **<a:rainbow:855248569136578570> tag** \`Destek sunucusunun tagını gösterir.\`\n
  **<a:rainbow:855248569136578570> s!moderasyon-sistemi**  \`Moderasyon komutlarını gösterir.\` \n
  **<a:rainbow:855248569136578570> s!guard-sistemi**  \`Koruma Komutlarını Gösterir.\` \n
  **<a:rainbow:855248569136578570> s!mutesistem**  \`İlk Olarak Kurulum Yapınız.\`\n
  **<a:rainbow:855248569136578570> s!kasa-yardım**  \`kasa Komutlarını Gösterir.\` \n
  **<a:rainbow:855248569136578570> s!say**  \`Sunucu Bilgilerini Gösterir.\` \n
  **<a:rainbow:855248569136578570> s!yardım-sunucu-kur**\`Sunucu-kur komutlarını gösterir.\`\n
  **<a:rainbow:855248569136578570> s!rütbe-yardım**\`rütbe sistemini gösterir. \`\n
  **<a:rainbow:855248569136578570> s!eğlence-yardım**\`Eğlence komutlarını gösterir.\` \n
  **<a:rainbow:855248569136578570> s!jail-yardım**\`jail.\` \n
  **<a:rainbow:855248569136578570> s!kullanıcı-yardım**\`kullanıcı komutlarını gösterir.\` \n
`
    
    
  )
    .setFooter( "Strom / Discord'da Yeni Devrim!", client.user.avatarURL())
  return message.channel.send(embed);
},

//
  				} else {
        return tools.embed(msg, ` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin [Oyver](https://discordbots.org/bot/663092359835156506/vote) Yazısına Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
                             }
        })
          //
  
  
  
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","yardim"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "a!davet-sistemi Menüsü",
  usage: "yardım"
};
