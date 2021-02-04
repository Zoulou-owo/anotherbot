const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js')

exports.run = (client, message) => {
	
	const embed = new Discord.MessageEmbed()
	   .setTitle('🧪 Test')
.setColor('#c215e9')
.setDescription('Utilisation :\n\`.test\`\nCommande pout tester si le bot fonctionne. Renvoie un message si fonctionnel.')
.setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL())
message.channel.send(embed)
}
module.exports.help = {
    name: 'test-help',
        alias: ["help-test", "Test-help",  "Test-Help", "help-Test", "Help-test"]
}