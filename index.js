const Discord = require('discord.js');
const client = new Discord.Client();
const { color, prefix, token } = require('./sts.json');

client.on("message", message => {
    var list = [
        "😂",
        "😮",
        "😬",
        "🤣",
        "😤",
        "😢",
        "🥺",
        "😕",
        "🤓",
        "🥳"
    ];

    let emj = list[Math.floor(Math.random() * list.length )];

    if(message.content !== ['s'])
    message.react(emj)
    .then(() => message.delete({ timeout: 30000 }))
    .catch(err => console.log(err))
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  
   const args = message.content
       .trim().slice(prefix.length)
       .split(/ +/g);
   const command = args.shift().toLowerCase();
  
   try {
       const cmdh = require(`./comandos/${command}.js`)
       cmdh.run(client, message, args);
   } catch (err) {
   console.error('Ocorreu algum erro:' + err);
  }
});

client.on("message", function(message){
    if(message.content === `<@!${client.user.id}>`)
    
    message.reply(new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(message.guild.name)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL())
    .setDescription(`
**Olá ${message.author}, sou um bot exclusivo do [ ${message.guild.name} ]**
**Estou na v1.0**
**Meu prefixo é [ ${prefix} ]**
**Utilize: [ ${prefix}help ] para mais informações!**
`))
.then(m => m.delete({ timeout: 15000 }))
.then(() => message.delete())
.catch(err => console.log(err));
});

client.on("ready", () => {
    console.log('Bot Ativo!');
});

client.login(token);