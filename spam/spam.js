const Discord = require("discord.js");
const express = require("express");
const app = express();
const client = new Discord.Client();
const token = "your-discord-token";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

app.use(express.json());

app.post("/send", async (req, res) => {
  const message = req.body.message;
  client.channels.cache.get("your-channel-id").send(message);
  res.json({ message: "Message sent" });
});

client.login(token);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});