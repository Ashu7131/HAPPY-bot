const Discord = require('discord.js');
let days = 0;
let week = 0;

exports.run = (client, message, args) =>{
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let servers = client.guilds.cache.size;
    let users = client.users.cache.size;

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let serverembed = new Discord.MessageEmbed()
        .setColor("#00FFFF")
        .setAuthor(`RaptorSA`, client.user.displayAvatarURL)
        .addField(`Version`,`2.3.9`, true)
        .addField(`Library`,`Discord.js` , true)
        .addField(`Creator`,`HAPPY#7131`, true)
        .addField(`Servers`, `${servers}`, true)
        .addField(`Users`, `${users}`, true)
        .addField(`Invite`, `[Invite Me](https://top.gg/bot/722790472279523339/invite)`, true)
        .setFooter(`Uptime: ${uptime}`);

    message.channel.send(serverembed);    

}
