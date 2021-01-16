const Discord = require("discord.js");

 const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => { 

const embed = new Discord.MessageEmbed()

.setTimestamp() 

.setColor('#c215e9') 

.setTitle('Liste des commandes ') 

.setDescription("**Listes des commandes**\n**Fun:**\n`avatar` : permet d'afficher la photo de profil de quelqu'un.\n`ping` : affiche le ping.\n`test` : commande de test.\n**Moderation**\n`kick` : permet de kick un utilisateur.\n`ban` : permet de ban un utilisateur.\n`clear` : Permet de clear un nombre de messages entre 1 et 100\n\n**Le prefix est : `.`**") 

.setFooter("De AnotherBot pour " + message.author.username,

message.author.displayAvatarURL()); 

return message.channel.send(embed) }

 module.exports.help = { name: 'help', };

