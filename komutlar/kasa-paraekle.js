const Strom = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')


exports.run = async (client, message, args) => {
  if(!client.ekoayarlar.admin.includes(message.author.id)) return message.reply(`bunu yapabilmek için gerekli yetkiye sahip değilsin!`)
  const silinecekkllnc = message.mentions.members.first();
  let para = args[1]
  if(!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiye-${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum-${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismi-${silinecekkllnc.id}`);
  
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  await db.add(`bakiyeStrom-${silinecekkllnc.id}`, para)
  
  
  message.channel.send(`:+1:`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['para-ekle'],
    permLevel: 0
}

exports.help = {
    name: 'para-ekle',
    description: 'Strom',
    usage: 'Strom'
}