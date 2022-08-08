const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()//discord.gg/turkiye
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`

• **s!ban** \`Belirttiğiniz Üyeyi Sunucudan Yasaklar.\`\n
• **s!nuke**  \`Kanaldaki bütün mesajları siler.\` \n
• **s!otorol**  \`Etiketlediğiniz rolü her gelen üyeye verir.\` \n
• **s!ototag**  \`Etiketlediğiniz tagı her gelen üyeye verir.\` \n
• **s!yetkilerim**  \`Sunucudaki yetkilerinizi gösterir.\` \n
• **s!sunucutanıt**\`Sunucu-kur komutlarını gösterir.\`\n
• **s!rütbe-yardım**\`rütbe sistemini gösterir. \`\n
• **s!eğlence-yardım**\`Eğlence komutlarını gösterir.\` \n
• **s!jail-yardım**\`jail komutlarını gösterir.\` \n
• **s!kullanıcı-yardım**\`kullanıcı komutlarını gösterir.\` \n
• **s!nsfw-yardım**\`+18 komutları gösterir.\` \n
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