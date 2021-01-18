const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js');



exports.run = (client, message) => {

  const embed = new Discord.MessageEmbed()
  .setColor(3447003)
  .setDescription
  .addField
  .addBlankField(true)
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send({embed});
};

module.exports.help = {
    name: 'server-info',
  };
