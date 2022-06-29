const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
let botid = "756883309270663229";

exports.run = async (client, message, args) => {
  
  
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s!";


  const embed = new Strom.MessageEmbed()
    .setAuthor(
      `${client.user.username} `,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("#d02090")
    .setTitle(` **Strom Bot eğlence-yardım Menüsüne Hoşgeldiniz** `)
    .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
    **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  
  **<a:rainbow:855248569136578570> ${prefix}bugbildir\:  bu komut oluşabilecek hatalar içindir.\`\n
  **<a:rainbow:855248569136578570> ${prefix}kullanıcıbilgi\:  Kullanıcının bilgilerini gösterir.\`\n
  ${prefix}şablon-gönder\: bize sunucu şablonu gönderir. Beğenirsek s!diğer-temalar larına eklenir.\`\n
  **<a:rainbow:855248569136578570> ${prefix}tavsiye\:  Bot için tafsiye verin.\`\n
`
    
    
  )
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.displayAvatarURL({ dynamic: true })
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı"],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı-yardım",
  description: "a!davet-sistemi Menüsü",
  usage: "yardım"
};
