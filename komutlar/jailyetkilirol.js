const Discord = require('discord.js')
const db = require("quick.db");
const database = require('quick.db');


exports.run = async(client, message, args) => {
 const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjYwNzM0NTkyfQ.Tci7n9zVPbCAfU70t8CccDiH7lg7pGrvYHnIvRk9f1s', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  //if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
//  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
   var başarılı = ['**İŞTE BU!** <a:tik1:823900091143159828>', '**SÜPER!** <a:tik1:823900091143159828>', '**NASIL YAPTIN BUNU?!** <a:tik1:823900091143159828>', '**MÜKEMMEL!** <a:tik1:823900091143159828>', '**SEVDİM BUNU!** <a:tik1:823900091143159828>', '**ŞİMDİ OLDU!** <a:tik1:823900091143159828>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:alarm3:823900153831620658>', '**OLMADI BU!** <a:alarm3:823900153831620658>', '**HAY AKSİ!** <a:alarm3:823900153831620658>', '**HADİ ORADAN!** <a:alarm3:823900153831620658>', '**OLMADI YA!** <a:alarm3:823900153831620658>', '**BÖYLE OLMAZ?!** <a:alarm3:823900153831620658>', '**HADİ YA!** <a:alarm3:823900153831620658>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**s!jail-yetkilisi ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, !sjail-yetkilisi ayarla/sıfırla @rol yazmalısın.`)
   
  
  if (args[0] == 'ayarla') {
  
  let yetkilirol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!yetkilirol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  db.set(`jailyetkilisi_${message.guild.id}`, yetkilirol.id)
  message.channel.send(x + ` Jail yetkilisi ${yetkilirol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailyetkilisi_${message.guild.id}`)
    message.channel.send(x + ` Jail yetkilisi başarıyla sıfırlandı.`)
  }
  
  
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },
exports.conf = {
 enabled: true,
 guildOnly: false,
   aliases: ['jailyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'jail-yetkilisi',
 description: 'Hangi role sahip kişilerin jaile atabileceğini ayarlarsınız.',
 usage: 'jail-yetkilisi ayarla/sıfırla @rol'
};