const Strom = require('discord.js');
const Discord = new Strom.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const Strom = new Strom.MessageEmbed()
 .setAuthor(`${client.user.username} Strom | çekiliş menüsü`)
 .setColor("RED")
.addFields({
                name: '**s!çekiliş**',
                  value: "Çekiliş başlatır",
                inline: true
              },
              {
                name: '**s!reroll**',
                    value: "Çekilişi yeniden çeker",
                inline: true
              },
              {
                name: '**s!çekilişbitir**',
                    value: "Çekilişi bitirir",
                inline: true
             
             
              
              
     

              }) 
  .setFooter(`*                                                               ${client.user.username} | © 2022                                                                      *`)
 .setImage()
 
 message.channel.send(Strom)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-sistemi'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'çekilişsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};