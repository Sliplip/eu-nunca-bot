const Discord = require('discord.js');
const { color, prefix } = require('../sts.json');

exports.run = (client, message, args) => {
    var load = message.guild.emojis.cache.find(r => r.name === 'carregando')

    if(args[0]){
        return message.reply('Formato correto: ' + prefix + 'parar')
        .then(m => m.delete({ timeout: 5000 }))
        .catch(err => console.log(err));
    }

    message.channel.send(new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(`Finalizando o Jogo, Aguarde ${load}`)).then(message => setTimeout(() => {
       message.channel.delete();
       message.guild.channels.create('jogar');
       message.channel.send('Jogo finalizado!').then(m => m.delete({ timeout: 5000 }))
       .catch(err => console.log(err));
    }, 5000))
    .catch(err => console.log(err));

};