// hours_wasted = 4
// started = 08.09.21 3pm


require('dotenv').config()
const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({intents})

client.on('messageCreate',(m)=>{
    if(m.content.match(/hentai|porn|horny|хентай|порно|порнуха|порнуху|хорни|возбужден|секс|sex/ig)){
    m.author.send('Stop Being h0rny!!')
        m.reply('Silence Wench!');
    setTimeout(() => {
    m.reply('I do not wish to be h0rny anymore.');
    setTimeout(() => {
        m.reply('I just want to be happy...')
    },1500);
}, 1500);

}})

client.login(process.env.TOKEN);