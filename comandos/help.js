const Discord = require('discord.js');
const { color, prefix } = require('../sts.json');

exports.run = (client, message, args) => {
    message.delete()
    .catch(err => console.log(err));

    if(args[0]){
        return message.reply('Formato correto: ' + prefix + 'iniciar')
        .then(m => m.delete({ timeout: 5000 }))
        .catch(err => console.log(err));
    }

    message.author.send(new Discord.MessageEmbed()
    .setColor(color)
    .setThumbnail(message.guild.iconURL())
    .setTitle('Meus Comandos:')
    .addField(`${prefix}help`, `Para obter uma lista de comandos do servidor`)
    .addField(`${prefix}iniciar`, `Para iniciar o jogo`)
    .addField(`${prefix}parar`, `Para parar o jogo`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL()))
    .then(m => m.delete({ timeout: 30000 }))
    .catch(err => console.log(err));
};