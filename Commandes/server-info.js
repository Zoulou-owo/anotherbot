const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js');



exports.run = (client, message) => {

  const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor(3447003)
  .setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
  .addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
  .addField('AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
  .addField('Location', message.guild.region, true)
  .addField('Created', message.guild.createdAt.toLocaleString(), true)
  .addBlankField(true)
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send({embed});
};

module.exports.help = {
    name: 'server-info',
  };