const { EventEmitter } = require('events');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch")
const dateformat = require("dateformat")

module.exports = class RedditImage extends EventEmitter {

    /**
     * Instancie la classe 'RedditImage'; obligatoire par la suite
     * @constructor
     * @param {Discord.Client} client - Représente le client
     */

    constructor(client) {
        super()

        if(!client) throw new Error("Un Discord Client doit être précisé.");

        this.client = client;
    };

        /**
     * Create a embed with reddit image
     * @param {message} message 
     * @param {options} object 
     * @param {args} object
     */
    async create(message, options, args) {
        
        if(!message) throw new Error("Vous devez donner un message (paramètre de votre événement)");
        
        if(typeof options !== "object") throw new Error("Les options doivent être dans un objet.");

        if(!options.ruleschannel) throw new Error("Une option \`ruleschannel\` est nécessaire)");

        if(typeof options.ruleschannel !== "string") throw new Error("L'option \"ruleschannel\" doit être de type String.")
        
        let url = `https://api.reddit.com/r/${options.ruleschannel}/about.json`
        await fetch(url, {headers: {Authorization: `fA-srx2u-9kZZaxRt1qOgR7jJZPdHw`}})
        .then(res => res.json())
        .then(body => {

        console.log(body)

        let desc = body.data.description;
        let publicdescription = body.data.public_description
        let created = new Date(body.data.created*1000);

        const embed = new MessageEmbed()
        .setTitle(`*Règle du channel ${options.ruleschannel} !*`)
        .setThumbnail(body.data.header_img)
        .setDescription(`${desc.length < 2048 ? desc : "La description fait plus de 2048 caractères"}`)
        .addField("Lien du Reddit", `[Clique ici](https://www.reddit.com${body.data.url})`)
        .addField("Langue", `${body.data.lang}`, true)
        .addField("Date de création", `${moment(created).locale('fr').format('LLL')}`)
        .addField("Description Public", `${publicdescription.length < 2048 ? publicdescription : "La description fait plus de 2048 caractères"}`, true)
        .setColor(body.data.key_color)

        message.channel.send(embed)
            })
    }
}
