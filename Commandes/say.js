const Discord = require("discord.js");
const config = require("../config.js");

module.exports.run = (client, message, args) => {

if(message.author.id !== config.OWNER) return;
let msg = args.join(" ")
if(!msg) return message.channel.send("Je ne sais pas ce que je dois dire !")
message.delete()
message.channel.send(msg);
}

module.exports.help = {
    name: 'say',
    category: 'fun',
    utility: 'permet de faire envoyer un message par le bot'
  };
