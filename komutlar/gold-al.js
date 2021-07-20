const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const client = new Strom.Client();

exports.run = async (client, message, args) => {

  const Hayir = client.emojis.cache.get("703842141620666409");
  const Evet = client.emojis.cache.get("703842141113417808");
  message.react("683327648436453517");
  let goldPlayer = args[0];
  if (!goldPlayer) return message.channel.send(Hayir + " Bir ID Girmelisin");
  message.react("703842141113417808");
  db.delete(`Gold_${goldPlayer}`);
  message.channel.send(
    Evet +
      ` **\`\`${goldPlayer}\`\`** ID'sine Sahip <@${goldPlayer}> Artık Gold Üye Değil!`
  );
  message.react("703842141113417808");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-al"],
  permLevel: 4,
  kategori: "sahip"
};
exports.help = {
  name: "gold-kapat",
  description: "Gold Üye He ? :D",
  usage: "gold-Kapat"
};