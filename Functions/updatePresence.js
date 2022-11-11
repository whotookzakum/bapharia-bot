const { ActivityType } = require("discord.js");

const presenceOptions = [
    {
        type: ActivityType.Competing,
        name: 'Asterleeds Arena',
        status: 'online'
    },
    {
        type: ActivityType.Listening,
        name: "L'arc~en~Ciel - Mirai",
        status: 'idle'
    },
    {
        type: ActivityType.Watching,
        name: "over Regnus",
        status: 'online'
    },
    {
        type: ActivityType.Playing,
        name: "drums in Salamzart",
        status: 'idle'
    },
    {
        type: ActivityType.Streaming,
        name: "Charlotte's concert",
        url: "https://www.youtube.com/watch?v=iwdTAxpLWbU"
    }
]

function setRandomPresence(client, seconds) {
    setInterval(async function () {
        const option = presenceOptions[Math.floor(Math.random() * presenceOptions.length)]
        let presence = {
            activities: [
                { name: option.name, type: option.type }
            ],
            status: option.status
        }

        if (option.url) {
            presence.activities[0].url = option.url
        }

        try {
            client.user.setPresence(presence)
        } catch (error) {
            console.log(error)
        }
    }, seconds * 1000)
}

module.exports = { setRandomPresence }