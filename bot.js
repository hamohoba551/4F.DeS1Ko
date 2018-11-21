const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {


});


const adminprefix = "";
const devs = ['351262573120716800'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'de')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk")
    message.channel.sendMessage(`**:white_check_mark: تم تغير الحاله الي  : ${argresult}**`)
}
});


client.login(process.env.BOT_TOKEN);
