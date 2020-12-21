const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {

        member
          .kick('Optionnel, ajouter la raison pour les logs.')
          .then(() => {
           
            message.channel.send(`${user.tag} a été kick avec succès !`);
          })
          .catch(err => {
           
            message.channel.send('Je n\ai pas les permission pour kick cette personne.');
           
            console.error(err);
          });
      } else {
        
        message.channel.send("That user isn't in this guild!");
      }
     
    } else {
      message.channel.send("Veuillez mentionner la personne a kick.");
    }
  }

module.exports.help = {
    name: 'kick',
  };
