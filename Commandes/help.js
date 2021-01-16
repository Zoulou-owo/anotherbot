const Discord = require("discord.js");
 const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => { 
const embed = new Discord.MessageEmbed()

.setTimestamp() 
.setColor('#c215e9') 
.setTitle('Liste des commandes ') 
.setDespcription(`Fun: \nAvatar : permet d'afficher la photo de profil de quelqu'un.\nping.js : affiche le ping\nTest, commande de test. \nModeration. n\kick : permet de kick un utilisateur\nBan : permet de ban un utilisateur`) 
.setFooter("De AnotherBot pour " + message.author.username,
message.author.displayAvatarURL()); 

return message.channel.send(embed) }

 module.exports.help
= { name: 'help', };