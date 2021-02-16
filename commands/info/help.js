exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'AQUA',
            author: { name: 'COMMANDS' },
            footer: { text: 'HAPPY' },
            fields: [
                { name: 'Music', value: '`play`,`join`,`pause`, `resume`, `queue`, `clear-queue/cq`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop/left/leave`, `filter`, `filters`, `enable-filters`' },
                { name: 'Filters', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
                { name: 'Moderation', value: '`purge`,`clear`,`ban`,`kick`' },
	        { name: 'Info', value: '`help`,`info`,`serverinfo`,`uptime`' },
		{ name: 'Support', value: '`support`,`server`,`invite`' },
		{ name: 'Other', value: '`createinvite`,`ping`' },
            ],
            timestamp: new Date(),
            description: `HAY MY PREFIX IS /`,
        },
    });

};
