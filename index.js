const Discord = require('discord.js-patched-for-selfbots');
const client = new Discord.Client();

client.on('ready', ()  => {
console.log(`${client.user.tag}`)
})
client.on('message', message => {
if(message.author.id === "914521670969069568")
{
        console.log('Hacker speak!')
        message.react("🐒")
        message.react("🦧")

}
if(message.author.id === "920363713733742622")
{
    console.log('ζ͜͡c00lBxBBy speak')
    message.react("🐒")
    message.react("🦧")
}

})
client.login("token here")
