const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js')

exports.run = (client, message) => {
	
	const embed = new Discord.MessageEmbed()
	   .setTitle('🏓 Ping')
.setColor('#c215e9')
.setDescription('Utilisation :\n\`.ping\`\nEnvoie le ping du client')
.setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL())
message.channel.send(embed)
}
module.exports.help = {
    name: 'ping-help',
        alias: ["help-ping", "Ping-help",  "Ping-Help", "help-Ping", "Help-ping"]
}