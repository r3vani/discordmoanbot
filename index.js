const Discord = require("discord.js")
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command.js')
//const token = require('./token.json')

client.on('ready', () => {
    console.log('Online.')

    command(client, ["kujlu", "lujku"], (message) => {
        message.channel.send('lukju gej')
    })
})
//client.login(token.token)
client.login(process.env.D_Token)