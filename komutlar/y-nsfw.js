const akaneko = require("akaneko")
const Discord = require("discord.js")


exports.run = async(client, bot, message, args) => {
    const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
  
  
  const answer = args.join(" ")

    if (!answer) {
        const blank = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Errrrk!')
            .setDescription('Lütfen bir tür giriniz.')
            .addField('Türler:', 'ass\nbdsm\nblowjob\ncum\ndoujin\nfeet\nfemdom\nfoxgirl\ngifs\nglasses\nhentai\nnetorare\nmaid\nmasturbation\norgy\npanties\npussy\nschool\nsuccubus\ntentacles\nthighs\nuglyBastard\nuniform\nyuri\nzettaiRyouiki', true)
            .setTimestamp()
            .setFooter('Nsfw command.');

        message.channel.send(blank)
    } else if (!message.channel.nsfw) {
        message.channel.send(":x: Bu kanalda NSFW seçeneği açık değil. Lütfen açık olan kanalda deneyin.") //bu komut cko utnrk yaptigm komt guyz plz like folw and sub
    } else if (answer == 'ass') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.ass())
        message.channel.send(embed)
    } else if (answer == 'bdsm') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.bdsm())
        message.channel.send(embed)
    } else if (answer == 'blowjob') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.blowjob())
        message.channel.send(embed)
    } else if (answer == 'cum') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.cum())
        message.channel.send(embed)
    } else if (answer == 'blowjob') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.blowjob())
        message.channel.send(embed)
    } else if (answer == 'doujin') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.doujin())
        message.channel.send(embed)
    } else if (answer == 'feet') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.feet())
        message.channel.send(embed)
    } else if (answer == 'femdom') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.femdom())
        message.channel.send(embed)
    } else if (answer == 'foxgirl') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.foxgirl())
        message.channel.send(embed)
    } else if (answer == 'gifs') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.gifs())
        message.channel.send(embed)
    } else if (answer == 'glasses') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.glasses())
        message.channel.send(embed)
    } else if (answer == 'hentai') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.hentai())
        message.channel.send(embed)
    } else if (answer == 'netorare') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.netorare())
        message.channel.send(embed)
    } else if (answer == 'maid') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.maid())
        message.channel.send(embed)
    } else if (answer == 'masturbation') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.masturbation())
        message.channel.send(embed)
    } else if (answer == 'orgy') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.orgy())
        message.channel.send(embed)
    } else if (answer == 'panties') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.panties())
        message.channel.send(embed)
    } else if (answer == 'pussy') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.pussy())
        message.channel.send(embed)
    } else if (answer == 'school') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.school())
        message.channel.send(embed)
    } else if (answer == 'succubus') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.succubus())
        message.channel.send(embed)
    } else if (answer == 'tentacles') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.tentacles())
        message.channel.send(embed)
    } else if (answer == 'thighs') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.thighs())
        message.channel.send(embed)
    } else if (answer == 'uglyBastard') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.uglyBastard())
        message.channel.send(embed)
    } else if (answer == 'uniform') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.uniform())
        message.channel.send(embed)
    } else if (answer == 'yuri') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.yuri())
        message.channel.send(embed)
    } else if (answer == 'zettaiRyouiki') {
        const embed = new Discord.MessageEmbed()
            .setImage( akaneko.nsfw.zettaiRyouiki())
        message.channel.send(embed)
    } else {
        const wrongarr = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Errrrk!')
            .setDescription('Yanlış tür.')
            .setTimestamp()
            .setFooter('Nsfw command.');

        message.channel.send(wrongarr)

    }


} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },

exports.conf = {
    aliases: ['nsfw'],
    permLevel: 0,
    kategori: "Eğlence",
};

exports.help = {
    name: 'NSFW',
    description: 'Sadece NSFW kanalına istediğiniz tür fotoğraf atar.',
    usage: 'nsfw <tür adı>',

};