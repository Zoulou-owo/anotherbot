const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {

  if (!message.mentions.users.size) {

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('#c215e9')
    .setTitle('Voici votre avatar :')
    .setThumbnail(`${message.author.displayAvatarURL()}`)
    .setFooter("De AnotherBot pour " + message.author.username, message.author.displayAvatarURL());
    return message.channel.send(embed)
    
    }
    
    
    const avatarList = message.mentions.users.map(user => {
    
    return `${user.username}\'s avatar: ${user.displayAvatarURL()}`;
    
    });
    
    message.channel.send(avatarList);
    }


module.exports.help = {
    name: 'avatar',
  };  