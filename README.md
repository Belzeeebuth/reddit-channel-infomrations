<h1 align="center">Welcome to reddit-informations-channel 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/reddit-informations-channel" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/reddit-informations-channel.svg">
  </a>
  <a href="4" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-no-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

<a href="https://nodei.co/npm/reddit-informations-channel/"><img src="https://nodei.co/npm/reddit-informations-channel.png?downloads=true&downloadRank=true&stars=true"></a>

> Un module permettant d'avoir des informations sur un channel reddit ⚠️ Encore en développement

## Install

```sh
npm install reddit-informations-channel
```

## Run tests

```sh
npm run test
```

## Exemple

```js
const { RedditImage } = require('reddit-informations-channel');
const { Client } = require('discord.js');

const client = new Client();

client.on('message', async message, args => {

if(message.content === "!reddit") {

let channelReddit = args.join(" ");
        if(!RedditSearch) return message.channel.send("J'ai besoin d'une recherche pour que je puisse rechercher des informations d'un channel sur reddit :haha:")

        const redditinformations = await reddit.create(message, {
          ruleschannel: `${RedditSearch}`  
    });
  });
}
```

## Auteur

👤 **Belzébuth**

* Github: [@belzeeebuth](https://github.com/Belzeeebuth)
* Discord : ⛧𝕭𝖊𝖑𝖟𝖊𝖇𝖚𝖙𝖍 ⸸#2050

## Montrez votre support

[Rejoignez ce serveur discord si le module vous à aidé](https://discord.gg/86kF3JszwG)

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
