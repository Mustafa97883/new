const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const data = require('quick.db');
exports.run = async (client, message, args) => {
   const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
 
  const filter = (reaction, user) => {
  return ["➕","💡"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};

  const yardım = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} - Tarafından İstendi`)
      .setColor("GREEN")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`**Davet Komutları: ➕ \n Ana Menü: 💡** \n Yukardaki emojilerden birine basarak komutlara bakabilirsin.`)
  .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
 var menü =  message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 99999 });
  let emojiler = ["➕","💡"]
   menü.react(emojiler[0])
   menü.react(emojiler[1])
collector.on('collect', (reaction, user) => {

  
     if(reaction.emoji.name == "➕") {
    const kobscode = new Discord.MessageEmbed()
      .setColor("BLUE")
 .addField("**Davet Komutları**", `\n**s!**__rütbe-ekle @rol davet__ = **__Rütbe Ekler__** \n**s!**__rütbeler__ = **__Rütbeleri Gösterir 1 Den 10'a Kadar__** \n**s!**__rütbe-sıfırla__ = **__Rütbeyi Sıfırlar.__** \n**s!**__davetleri-sıfırla__ = **__Davetleri Sıfırlar.__** \n**s!**__top__ = **__Lider Tablosunu Gösterir.__** \n**s!**__davetlerim__ = **__Davetlerinizi Gösterir.__** \n**s!**__bonus-ekle__ = **__Bonus Ekler.__** \n**s!**__davet-kanal #kanal__ = **__Davet Kanalını Ayarlar.__** \n**s!**__davet-kanal-sıfırla__ = **__Davet Kanalını Sıfırlar.__**`)
.setImage("https://cdn.discordapp.com/attachments/772883062085386282/775006230082748436/3.png")
  .setThumbnail(client.user.avatarURL())
 menü.edit(kobscode)
  }
 if(reaction.emoji.name == "💡") {
 menü.edit(yardım)
  }
});

collector.on('end', collected => {
  console.log(`Collected ${collected.size} items`);
});

} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['rütbe-yardım','rütbe','rütbe-sistemi'],
 permLevel: 0,
};

exports.help = {
 name: 'yardım-rütbe',
 description: '',
 usage: ''
};