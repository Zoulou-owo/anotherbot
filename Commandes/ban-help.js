const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js')

exports.run = (client, message) => {
	
	const embed = new Discord.MessageEmbed()
	   .setTitle('🔨 Ban')
.setColor("#ff0000")
.setDescription('Utilisation :\n\`.Ban <mention>\`\nPermission requise : **BAN_MEMBERS**')
.setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL())
message.channel.send(embed)
}
module.exports.help = {
    name: 'help-ban',
        alias: ["ban-help", "Ban-help",  "Ban-Help", "Help-Ban", "Help-ban"]
}