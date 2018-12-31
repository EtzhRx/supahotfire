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
client.login('mfa.T2iHU4XYqqQ8T5x8R0AAK4CU93S9eu9htl9Ij7G7Ld0N0-t4fuk7nfyiV-tp2xAU-5DPBoaMN7PGl_tvBcGu');
