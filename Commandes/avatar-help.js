const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js')

exports.run = (client, message) => {
	
	const embed = new Discord.MessageEmbed()
    .setColor('#c215e9')

.setTitle(':camera_with_flash: Avatar')
.setDescription('Utilisation :\n\`.avatar\`\n\(envoie votre photo de profil\)\n\`.avatar \<mention>\`\n(envoie la photo de profil de la personne mentionnée\)\nAliases : \`pp\` `pdp` `photo`')
.setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL())
message.channel.send(embed)
}

module.exports.help = {
    name: 'help-avatar',
        alias: ["avatar-help", "Avatar-help", "Avatar-Help", "Help-Avatar", "Help-avatar"]
}