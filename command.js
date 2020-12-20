const { prefix } = require('./config.json')

module.exports = (client, aliases, callback) => {
    if (typeof aliases === 'string'){
        aliases = [aliases]
    }
    client.on('message', message => {
        const { content } = message;

        aliases.forEach(aliases => {
            const command = '${prefix}${alias}'
            if (content.startsWith('${command} ') || (content === command)){
                console.log('test: ${command}')
                callback(message)
            } 
        });
    })
    
}