const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
const { token } = require("./config.json");

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setActivity("github.com/cfreemepq")
})

client.on("message", message => {
  if (message.content === "/casanova") 
    message.channel.send("https://github.com/cfreemepq")
})

client.on("message", message => {
  if (message.content === "/casanova") 
    message.channel.send("https://www.roblox.com/users/3808139090/profile")
})

client.login(token);
