const Discord = require('discord.js')
const {prefix} = require('../ayarlar.json')
module.exports = {
  name: "müzik-yardım",
  description: "müzik-yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\`${prefix}oynat <şarkı-adı>\` : **Bir Şarkıyı Oynatır.**
\`${prefix}atla\` : **Sıradaki Şarkıyı atlar.**
\`${prefix}döngü\` : **O Anki şarkıyı Hep tekrarlar.**
\`${prefix}durdur\` : **O anki Şarkıyı Durdurur.**
\`${prefix}devam\` : **Duran Şarkıyı Devam Ettirir.**
\`${prefix}sıra\` : **O Anki Sırayı Gösterir.**
\`${prefix}np\` : **O Anki Oynatılan Şarkıyı Söyler.**



`)
                      )    
}
}
