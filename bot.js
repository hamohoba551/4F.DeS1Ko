const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`إن قيادة الناس مهمة لا يحسن أداءها إلا الأبطال.`,'https://www.twitch.tv/MeeRcY')

});







client.login(process.env.BOT_TOKEN);
