const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()//discord.gg/turkiye
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`

• **tag** \`Destek sunucusunun tagını gösterir.\`\n
• **s!moderasyon-sistemi**  \`Moderasyon komutlarını gösterir.\` \n
• **s!kayıt-yardım**  \`kayıt komutlarını gösterir.\` \n
• **s!guard-sistemi**  \`Koruma Komutlarını Gösterir.\` \n
• **s!kasa-yardım**  \`kasa Komutlarını Gösterir.\` \n
• **s!yardım-sunucu-kur**\`Sunucu-kur komutlarını gösterir.\`\n
• **s!rütbe-yardım**\`rütbe sistemini gösterir. \`\n
• **s!eğlence-yardım**\`Eğlence komutlarını gösterir.\` \n
• **s!jail-yardım**\`jail komutlarını gösterir.\` \n
• **s!kullanıcı-yardım**\`kullanıcı komutlarını gösterir.\` \n
• **s!nsfw**\`+18 komutları gösterir.\` \n
• **s!çekiliş-sistemi**\`çekiliş komutlarını gösterir.\` \n











`)
.setFooter("Strom / Discord'da Yeni Devrim")
.setTimestamp()
message.channel.send(cse)
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "yardım",
usage: "!yardım"

};