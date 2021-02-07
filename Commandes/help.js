// const Discord = require("discord.js");
//  const {PREFIX} = require("../config.js");
//
// module.exports.run = (client, message, args) => {
// const embed = new Discord.MessageEmbed()
//
// .setTimestamp()
// .setColor('#FFC0CB')
// .setTitle('Liste des commandes ')
// .setDescription(":fire: **Fun:**\n`avatar` : permet d'afficher la photo de profil de quelqu'un.\n`ping` : affiche le ping.\n`test` : commande de test.\n\n:tools: **Moderation**\n`kick` : permet de kick un utilisateur.\n`ban` : permet de ban un utilisateur.\n`clear` : Permet de clear un nombre de messages entre 1 et 100\n\n:round_pushpin: **Le prefix est : `.`**")
// .setFooter("De AnotherBot pour " + message.author.username,
// message.author.displayAvatarURL());
//
// return message.channel.send(embed) }
//
//  module.exports.help = {
//      name: 'help',
//      alias: ["h"]
//  };

const Discord = require('discord.js')

module.exports = {
  help:{
    name:'help',
    alias: ['h'],
    utility:'Permet de voir la liste des commandes disponibles',
    category: ''
  },
  run: async (client, message, args) => {
    let text;

    text+=':fire: **Fun :**';
    for (command in client.commands) {
      if (command.help.category.toLowerCase() !== 'fun') return;
      text+=`\n\`${command.help.name}\` : ${command.help.utility}`
    }

    text+=`\n\n:tools: **Moderation :**`
    for (command in client.commands) {
      if (command.help.category.toLowerCase() !== 'moderation') return;
      text+=`\n\`${command.help.name}\` : ${command.help.utility}`
    }

    message.channel.send(
      new Discord.MessageEmbed().setColor('#FFC0CB').setDescription(text)
    )
  }
}
