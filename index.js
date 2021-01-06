const Discord = require('discord.js')
const client = new Discord.Client()
const ffmpeg = require('ffmpeg-static')
const { connect } = require('http2')
const path = require('path')

const config = require('./config.json')
const token = require('./token.json')

let connection;
let joinedChannelID = '1';
let joinedChannel;
let joinedCheck = false;

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`)
})


client.on('message', (receivedMessage) => {
    if (receivedMessage.author === client.user){
        return
    }
    if (receivedMessage.content === config.prefix + "join"){
        if(!receivedMessage.member.voice.channel) {
            receivedMessage.reply("You are not in a voice channel.")
        }
        else{
            receivedMessage.member.voice.channel.join().then((conn) => {
                connection = conn;
            });
            joinedChannelID = receivedMessage.member.voice.channelID;
            joinedChannel = receivedMessage.member.voice.channel;
            joinedCheck = true;
        }
    }
    if (receivedMessage.content === config.prefix + "leave" || receivedMessage.content === config.prefix + "disconnect"){
        joinedChannel.leave();
        joinedCheck = false;
    }
    if (receivedMessage.content.startsWith(config.prefix + "play")){
        if (joinedCheck === true){
            connection.play(path.join(__dirname, "moan.mp3"))
        }
    }
    if (receivedMessage.content.startsWith(config.prefix + "play anal")){
        if (joinedCheck === true){
            connection.play(path.join(__dirname, "MacaVoliAnal.mp3"))
        }
    }
})
client.on('voiceStateUpdate', (oldState, newState) => {
    if(joinedCheck === true){
        if (oldState.member.user.bot) return;
        if (newState.channelID === joinedChannelID && newState.channelID !== oldState.channelID){
            connection.play(path.join(__dirname, "moan.mp3"))
        }
    }
})

client.login(token.token)