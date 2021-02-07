const Discord = require('discord.js');
const {PREFIX} = require("../config.js");
const db = require('quick.db')

module.exports = async(client, message) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
      if (!db.get(`xp`)) db.set(`xp`, {});
      if (!db.get(`xp.${message.guild.id}`)) db.set(`xp.${message.guild.id}`, {});

      let userxp = db.get(`xp.${message.guild.id}.${message.author.id}`)
      if (!userxp) db.set(`xp.${message.guild.id}.${message.author.id}`, {lvl: 0, xp: 0})

      let xp = (10+(Math.round(Math.random()*20)))
      let totalxp = userxp.xp+xp
      let toLvlUp = 100+(userxp.lvl*1.5);

      if (toLvlUp<=totalxp) {
        message.channel.send(`Bravo, vous passez au niveau **${userxp.lvl+1}** !`);

        db.set(`xp.${message.guild.id}.${message.author.id}`, { xp: 0, lvl: (userxp.lvl+1)});
      } else {
        db.set(`xp.${message.guild.id}.${message.author.id}.xp`, totalxp);
      }
    if(message.content.startsWith(PREFIX)) {

    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const commande = args.shift();
    const cmd = client.commands.get(commande);

    if (!cmd) return;

    return cmd.run(client, message, args)
    }
};