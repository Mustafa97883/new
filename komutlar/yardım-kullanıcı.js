const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()//discord.gg/turkiye
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`


• **s!hata-bildir**  \`herhangi bir hatayı'yı bize iletin.\` \n
• **s!şablon-gönder**  \`bize sunucu şablonu gönderir. Beğenirsek s!diğer-temalar larına eklenir.\` \n
• **s!öneri**  \`Bot için öneride bulunursunuz.\` \n
• **s!şikayet**  \`Bot için şikayette bulunursunuz.\` \n
• **s!afk**\`afk olurusnuz.\`\n
• **s!şifre**\`rastgele şifre oluşturur. \`\n
• **s!yapımcılar**\`yapımcıları gösterir.\` \n











`)
.setFooter("Strom / Discord'da Yeni Devrim \nherhangi bir hatada s!hata (hata)\nönerileriniz için s!öneri (öneriniz)")
.setTimestamp()
message.channel.send(cse)
}
module.exports.conf = {
aliases: ["kullanıcı","kullanıcı-yardım"]
}

module.exports.help = {
name: "yardım-kullanıcı",
usage: "!yardım"

};