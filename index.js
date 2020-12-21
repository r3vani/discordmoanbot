const Commando = require('discord.js-commando')

const config = require('./config.json')
const token = require('./token.json')

const client = new Commando.CommandoClient({
    owner:'477922374445039651',
    commandPrefix: config.prefix
})

client.on('ready', async () => {
    console.log('Online.')

    client.registry.registerDefaults()
})

client.login(token.token)
// client.login(process.env.D_Token)