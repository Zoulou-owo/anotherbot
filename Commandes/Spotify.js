const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
message.channel.send(`La playlist qui a aidé a travailler : \nhttps://open.spotify.com/playlist/6lfMoXp8eSHF0ofVCCqDJE?si=ZDqIpxF_Ssyd56SqvkxhSw&utm_source=copy-link`)
      }
      
module.exports.help = {
    name: 'spotify',
    alias: ["Spotify"],
    category: 'Easteregg',
    utility: "pas d'utilité particulière",
    usage: "spotify"
};
