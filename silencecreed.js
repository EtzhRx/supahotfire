const Discord = require('discord.js');
const client = new Discord.Client();
//Awokwokwokwokwok
console.log("Udah selesai ucup :v")

client.on("message", message => {
if(message.author.bot) return;

if(message.content === "ping") {
message.channel.send('Pong!');
}
});
client.login('MzE3Mjc4NTc0MzI5NzI0OTI5.Dwi42A.ymtE4mI05oOauc4AYHHTUiVYkZc');
