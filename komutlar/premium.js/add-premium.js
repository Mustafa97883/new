const premiumSchema = require("../../models/premium");
const { Client, Message, MessageEmbed } =require('discord.js');


module.exports = {
    name: 'premium',
  
  /**
  * @param {Client} client
  * @param {Message} message
  * @param {string[]} args
  */
  
  run: async(client, message, args) => (