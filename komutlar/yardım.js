const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()//discord.gg/turkiye
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`[OYVER](https://top.gg/bot/756883309270663229/vote)
**Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
**Onay sürecinde olduğu için bazı komutlar çalışamaz!**

• **tag** \`Destek sunucusunun tagını gösterir.\`\n
• **s!moderasyon-sistemi**  \`Moderasyon komutlarını gösterir.\` \n
• **s!kayıt-yardım**  \`kayıt komutlarını gösterir.\` \n
• **s!guard-sistemi**  \`Koruma Komutlarını Gösterir.\` \n
• **s!kasa-yardım**  \`kasa Komutlarını Gösterir.\` \n
• **s!yardım-sunucu-kur**       \`Sunucu-kur komutlarını gösterir.\`\n
• **s!rütbe-yardım**      \`rütbe sistemini gösterir. \`\n
• **s!eğlence-yardım**        \`Eğlence komutlarını gösterir.\` \n
• **s!jail-yardım**      \`jail komutlarını gösterir.\` \n
• **s!kullanıcı-yardım**      \`kullanıcı komutlarını gösterir.\` \n
• **s!çekiliş-sistemi**      \`çekiliş komutlarını gösterir.\` \n
• **s!yardım-botlist**     \`Botlist komutlarını gösterir.\` \n











`)
.setFooter("Strom / Discord'da Yeni Devrim \nherhangi bir hatada s!hata (hata)\nönerileriniz için s!öneri (öneriniz)")
.setTimestamp()
message.channel.send(cse)
}
module.exports.conf = {
aliases: ["yardim","help"]
}

module.exports.help = {
name: "yardım",
usage: "!yardım"

};