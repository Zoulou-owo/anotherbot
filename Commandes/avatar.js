const Discord = require("discord.js");
const {PREFIX} = require("../config.js");


exports.run = (client, message, args) => {

    let user = message.mentions.users.first() || message.author
    const embed = new Discord.MessageEmbed()
          .setImage(user.displayAvatarURL)
          .setColor(0x00A2E8)
  message.channel.send({embed})

}

module.exports.help = {
    name: 'avatar',
  };