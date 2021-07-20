const Discord = require("discord.js");
const Database = require("../Helpers/Database");
const data = require('quick.db');
exports.run = async (client, message, args) => {
let açıkmı = await data.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {

// premium açıksa yapılack işlemler buraya

} else { return message.channel.send(`${message.author}, bu komut premium bir komuttur. Bu sunucu da premium bulunmamakta.`) }
   

  if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply("Yetkiniz Bulunmamaktadır"); //
//
    var victim = message.mentions.members.size > 0 ? message.mentions.members.first().id : args.length > 0 ? args[0] : undefined;//////
    if(!victim) return message.reply("Lütfen Birinin İD Sini Yaz");////
    victim = message.guild.member(victim);//
    if(!victim) return message.reply("İD Sini Yazdığınız Kişi Sunucuda Bulunmamaktadır.");//

    var num = Number(args[1]);//
    if(isNaN(num)) return message.reply("Lütfen Bonus Olacak Sayı Giriniz.");//
    const db = new Database("./Servers/" + message.guild.id, "Invites");//

    var bonus = (db.add(`invites.${victim.id}.bonus`, num) || 0), total = (db.get(`invites.${victim.id}.total`) || 0);
    message.channel.send(`${victim} Adlı Kişiye ${num} Civarı Bonus Eklendi.`);//

    global.onUpdateInvite(victim, message.guild.id, total + bonus);//
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'bonus-ekle',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};
