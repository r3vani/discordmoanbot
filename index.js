const Discord = require("discord.js")
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('Online.')

    command(client, 'kujlu', (message) => {
        message.channel.send('lukju gej')
    })
})

client.login(process.env.D_Token)