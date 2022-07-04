const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
 exports.run = async (client, message, args) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {

  
const datas = await data.fetch(`${message.author.id}.zaman.kod`);
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`${message.author} **__6__ saat de bir kullanabilirsiniz!**`)).then(m => m.delete({timeout: 6000}));
data.set(`${message.author.id}.zaman.kod`, Date.now()+ms('6h'));
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **Özelden gönderdim __Kod__ gönderdim bakar mısın.**`));
message.author.send(`> **1 adet __Kod__ sunucusu kurmak için tema geldi.

> Güle güle kullan 😇

https://discord.new/wkpkX9fMXS4e`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));
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
  name: 'kod-tema'
};