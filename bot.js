const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`من يبي نسيان الماضي فل يتذكر من انا`,'https://www.twitch.tv/MeeRcY')

});







client.login(process.env.BOT_TOKEN);
