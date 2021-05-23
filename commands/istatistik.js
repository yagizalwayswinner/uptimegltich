const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const rexuszaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const rexusistatistikler = new Discord.RichEmbed()
  .setColor("#66ff00")
  .setFooter('Aura Uptime 2020 / 2021 Hakları Saklıdır. ', bot.user.avatarURL)
  .addField("Aura Uptime **İstatistikleri**", "Botlarınız  İçin En İyisi")
  .addField("**Botun Geliştiricisi**",  " <@>")
  .addField("**Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("**Çalışma süresi**", rexuszaman)
  .addField("**Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("**Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("**Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("**Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("**Ping**", bot.ping+" ms", true)
  .addField("**CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("**Bit**", `\`${os.arch()}\``, true)
  .addField("**Destek Sunucusu**", "https://discord.gg/BNmB2mGyNd", )
 return message.channel.send(rexusistatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'istatistik', 'bot-hakkında', 'bot'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};