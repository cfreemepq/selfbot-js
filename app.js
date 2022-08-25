const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
const { token } = require("./config.json");

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  client.user.setActivity("usar")
})

client.on("message", message => {
  if (message.content === "/casanova") 
    message.channel.send("https://github.com/cfreemepq \nhttps://twitter.com/cfreemepq")
})

client.login(token);