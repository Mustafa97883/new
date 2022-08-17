const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const sunucu = new Discord.MessageEmbed()
    .setAuthor(`Strom  | Eklentiler`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/854450815149277214/74b8c7ed3f881b718c504a44158bff3d.png"
    )
    .setDescription(
      ` 🔌  Strom  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Ticket Sistem__`,
      `♻️ \`${prefix}ticket-sistem\` Gelişmiş Ticket Sistem`,
      true
    )
    .addField(
      `__Rütbe Sistem__`,
      `♻️ \`${prefix}seviye-sistem\` Gelişmiş Seviye Sistem`,
      true
    )
    .addField(
      `__OtoRol Sistem__`,
      `♻️ \`${prefix}otorol-sistem\` Gelişmiş OtoRol Sistem`,
      true
    )
    .addField(
      `__Öneri Sistem__`,
      `♻️ \`${prefix}öneri-sistem\` Ayarlanabilir Öneri Sistem`,
      true
    )
    .addField(
      `__Sayaç Sistem__`,
      `♻️ \`${prefix}sayaç\` sunucunuza sayaç ayarlar`,
      true
    )
      .addField(
      `__AboneRol Sistem__`,
      `♻️ \`${prefix}abonerol-sistem\` Ayarlanabilir Abone Rol Sistem`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔱 \`${prefix}iletişim\` | QualitySel  İletişim Bilgileri.`
    );
  return message.channel.send(sunucu);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eklenti",
  description: "Yardım Menüsü",
  usage: "yardım"
};
