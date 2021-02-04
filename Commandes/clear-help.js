const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js')

exports.run = (client, message) => {
	
	const embed = new Discord.MessageEmbed()
	   .setTitle('⚪ Clear')
.setColor("#ff0000")
.setDescription('Utilisation :\n\`.clear <nombre de message entre 1 et 100>\`\nPermission requise : **MANAGE_MESSAGE**')
.setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL())
message.channel.send(embed)
}
module.exports.help = {
    name: 'clear-help',
        alias: ["help-clear", "Clear-help",  "Clear-Help", "help-Clear", "Help-clear"]
}