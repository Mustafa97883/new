const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()//discord.gg/turkiye
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`


🔞 **s!moderasyon-sistemi**  \`Moderasyon komutlarını gösterir.\` \n





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