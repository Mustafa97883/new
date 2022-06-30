const Strom = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require ("quick.db");
let talkedRecently = new Set();

module.exports = async ( message, args) => {
let client = message.client;
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 0);
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  
  
  else {
    const laura = [];
    client.commands.forEach(dropinnem => {
      laura.push(dropinnem.help.name);
      dropinnem.conf.aliases.forEach(abcdef => laura.push(abcdef));
    });

    const rifleman = require('string-similarity').findBestMatch(command, laura);
    message.channel.send(`bunu mu demek istediniz? **s!${rifleman.bestMatch.target}**`)
  };

  
    if (db.has(`karalist_${message.author.id}`) === true) {
    let embed = new Strom.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Karalistedesin!`)
    message.channel.send({embed: embed})
    return
  };


  
  if (cmd) {
const member = message.guild.member(client.user)
if(!member.hasPermission("SEND_MESSAGE")){
message.member.send(new Strom.MessageEmbed().setDescription(`${message.channel ? "<#"+message.channel.id+">" : "`"+message.channel.name+"`"} adlı kanalda mesaj göndermeye iznim yok! Ya iznimi aç yada Kurucum olan \`zelvos#2649\` iletişime geç!`))
}
  let bakım = await db.fetch('bakım');
  if(message.author.id !== ayarlar.ownerID)
  if(message.author.id !== ayarlar.ownerİD){

    if(bakım){
 let bakımTIME = new Date("2021-11-30:20:30")
 let time = Strom(bakımTIME - Date.now())
  return message.channel.send(new Strom.MessageEmbed().setDescription(`
${message.author}
Bot şuan bakımdadır!!
[LINK](https://zivocodes.tk/)

  `).setColor("RANDOM"))
     /*
**:gear: Sizlere En İyi Hizmeti Verebilmek İçin Bakımdayız.\n**❓**Bakım Sebebi:** `{bakım}`\n⏱️**Tahmini Süre:** **{time.days}** gün, **{time.hours}** saat, **{time.minutes}** dakika, **%{time.seconds}** saniye\n\n:arrows_counterclockwise: **Lütfen Daha Sonra Tekrar Deneyin.**
     */                         }}
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms,);
  }
};