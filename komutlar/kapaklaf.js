const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {  
  let kapak=[
      "Yalanım yok ki benim, aklımdasın hala. Ne yapayım güzelim gereksiz şeyleri kafa hep takıyorum.",
      "A101'de satılan 25 kuruşluk çikolatanın tadını bile veremeyen insanlar var. Öyle gereksizler... ",
      "Bazı insanların da aynı televizyon gibi tepesine vurulduğunda düzelmesi en büyük temennimdir.",
      "Kimine göre kral, kimine göre yalanım... Unutmayın beyler adamına göre adamım... ",
      "Bazı kişiler dümen çevirmek olunca kaptan olmak için sıraya giriyor.",
      "Içinden geldiği için bizimle olanları, işinden geldiği için bizimle olanlara değiştik. Yanlış ettik.",
      "Canımı yakacak kadar güçlü olanın sonuçlarına katlanacak kadar gücü olmalı.",
      "Eğer ben güneş isem sen aysın. Benim doğduğum yerde sen batarsın.",
      "Bana laf cambazlığı yapma kızım, bir laf sokarım kürtajla bile aldıramazsın.",
      "Terk etmek kolaysa senin için, el sallamakta hiç zor olmaz benim için.",
      "Insanlığa davet etsek yol tarifi isteyecek insanlar var.",
      "Senin etiketinin olduğu yer fiyatı ben koyarım.",
      "Balonlar, içi boş şeylerin de bazen yükselebileceğini hatırlatır.",
      "Bazı insanları sarımsaklasak da mı saklasak, yoksa boğup da rahatlasak mı?",
      "Laf sokma, kapak olursun. Yalvarma, köpek olursun. Delikanlı ol, belki yanımda yer bulursun.",
      "Laf Sokarim Derinden Gotun Oynar Yerinden",
      "Her gün resmine bakmadan duramıyorum. –İlla TÜKÜRECEĞİM!",
      "Kapak Olana Kapak Laf Sokamam :(",
      "Top Topu Çeker Dediğinde İnanmamıştım .. Doğruymuş Ama",
      "Laf dedi oldu kapak, söz söyledi oldu tencereye kapak.",
      "Çok talibim var diyenler; Sevinmeyin! Ucuz malın alıcısı çoktur.",
      "Etme sırtını duvardan başkasına emanet. En kralının bile içinde vardır bir nebze ihanet.",
      "İnsanlar da fotoğraf gibi; ne kadar büyütürsen, o  düşüyor kalitesi.",
      "Sana biraz adam ol diyeceğim seni de zor durumda bırakmak istemiyorum.",
      "Uzak dur çek elini benden, senin gibi seviyesizleri çok geride bıraktım ben.",
      "Bana şiir yaz diyorsun hoş güzel de, peki sen kaç harf edersin.",
      "2 dakika adam ol desem kaç dakikam kaldı diye soracak insansın",
      "Laf sokarım derinden aklın oynar yerinden.",
      "Ben sana ilaç olurum da, sen benim yan etkilerime dayanamazsın.",
      "Karabiber Ayran Koyumda Yaylan",
      "Senden Bir Kaşık Cacık Bile Olmazki Adam Olucaksın",
      "Sana Laf Sokmucam Şanslısın :) ",
      "Senin zirven benim zeminim! ",
      "Sen vurursun bela okurlar. Biz vururuz sala okurlar.",
      "Sen Vurursun Dikiş Atarlar Ben Vururum ** Toprak Atarlar **",
      "Yaklaşma toz olursun geçme pişman olursun.",
      "Uzaktan kusursuz, yakından lüzumsuz insanlar tanıdım.",
      "Senin artistlik yaptığın yerde bana yönetmenlik düşer.",
      "bir şey bilmene gerek yok haddini bil yeter.",
      "Beni eleştireceğine, git beynini geliştir!",
      "Tipinizin gideri var ama karakterinizin ederi yok.",
      "Matematikte bir konu olsan “Boş Küme” olursun. Havan kime ?",
      "52 ekran televizyon kadar kafan var ama küçük düğmesi kadar beynin yok.",
      "Konu adamlığa geldi, sen git istersen!",
  

    ]
       let member = message.mentions.members.first()
     if(!member)return message.channel.send(':no_entry_sign: Birini Etiketle!')
    else{
    message.channel.send(`${member}, ${kapak[Math.floor(Math.random() * 16)]}`)
    }
      
      
      } else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["laf"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'kapaklaf',
    description: 'Etiketlediniz Kisiye Kapak Laflar Soler.',
    usage: 'kapaklaf'
   }