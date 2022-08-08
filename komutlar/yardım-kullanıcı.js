const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()//discord.gg/turkiye
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`

🤖 hata-bildir \: herhangi bir hatayı'yı bize iletin.\`\n
🤖 şablon-gönder \: bize sunucu şablonu gönderir. Beğenirsek s!diğer-temalar larına eklenir.\`\n
🤖 öneri \: Bot için öneride bulunursunuz..\`\n
🤖 şikayet \: Bot için şikayette bulunursunuz.\`\n
🤖 afk \: afk olurusnuz.\`\n
🤖 yapımcılar \: yapımcıları gösterir.\`\n
🤖 şifre \: rastgele şifre oluşturur.\`\n











`)
.setFooter("Strom")
.setTimestamp()
message.channel.send(cse)
}
module.exports.conf = {
aliases: ["kullanıcı"]
}

module.exports.help = {
name: "yardım-kullanıcı",
usage: "!yardım"

};