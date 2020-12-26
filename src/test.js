const { RedditImage } = require('reddit-informations-channel');
const { Client } = require('discord.js');

const client = new Client();

// Instanciation 
const reddit = new RedditImage(client);
client.on('message', async message => {

        const RedditSearch = args.join(" ")
        if(!RedditSearch) return message.channel.send("J'ai besoin d'une recherche pour que je puisse rechercher une image sur reddit :haha:")

        const redditimage = await reddit.create(message, {
          ruleschannel: `${RedditSearch}`
    });
})
