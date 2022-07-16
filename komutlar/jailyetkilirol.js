const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {   
  
  const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.global/d80f45da-14d1-42a7-a16d-8f3385ce86a4/c10f8dedd93c798ce1e36ad9acb26fd4.png?v=1657994146595').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${prefix}jail-yetkili-rol\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  if(!message.mentions.roles.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setTitle('Bir hata oldu!').setDescription('Bir rol etiketlemeyi unuttunuz.'));
  let mentionRole = message.mentions.roles.first();
  data.set(`jail.yetkilirole.${message.guild.id}`, mentionRole.id);
  message.channel.send(new Discord.MessageEmbed().setTitle('İşte bu kadar!').setDescription(`Jail sistemin de kullanılacak: ${mentionRole} olarak seçtiniz.`));

} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-yetkili-rol'
};