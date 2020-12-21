const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
    
    const user = message.mentions.users.first();

    if (user) {
   
      const member = message.guild.members.resolve(user);
    
      if (member) {
      
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
           
            message.channel.send(`${user.tag} a été banni avec succès`);
          })
          .catch(err => {
           
            message.channel.send(`Je n\'ai pas les permission requise pour bannir ${user.tag}`);
           
            console.error(err);
          });
      } else {
       
        message.channel.send("That user isn't in this guild!");
      }
    } else {
  
      message.channel.send("Veuillez mentionner la personne a ban.");
    }
  };

module.exports.help = {
    name: 'ban',
  };