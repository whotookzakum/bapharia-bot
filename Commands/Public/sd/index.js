const { SlashCommandBuilder } = require('discord.js');
const commandTexts = require("../../../Text/en/commands.json");
const { DateTime } = require("luxon");
const raidTimes = require("./sdTimes.json")

// TODO: Get raid times and active raids from bapharia (a static API would work) for consistency across the webhooks.

const { name, description } = commandTexts.sd

const command = new SlashCommandBuilder()
    .setName(name)
    .setDescription(description)

function getSdCommandResponse() {
    const now = DateTime.now().setZone("Asia/Tokyo")

    const allRaidsThisWeek = Object.keys(raidTimes).flatMap(dayIndex => {
        const todayIndex = now.localWeekday
        const thisDayRaids = raidTimes[dayIndex].startTimes.map(raidTimeString => {
            let dateTime = now;

            if (dayIndex > todayIndex) {
                dateTime = now.plus({ days: dayIndex - todayIndex })
            }
            else if (dayIndex < todayIndex) {
                dateTime = now.minus({ days: todayIndex - dayIndex })
            }

            const raidTimeStringSplit = raidTimeString.split(":")

            return dateTime.startOf('day').set({ hour: raidTimeStringSplit[0], minute: raidTimeStringSplit[1] })
        })

        return thisDayRaids
    })

    const message = allRaidsThisWeek.map((dateTime, index) => {
        return `<t:${dateTime.toUnixInteger()}:F>\n`
    }).join("")

    const embeds = [{
        title: "Sudden Death Battle Battle Schedule",
        url: "https://bapharia.com/guides/missions",
        description: `Here's the schedule for this week. Note that this does not take into account game downtime. Timestamps are converted to your local time.\n\n${message}`,
        color: 0x0099ff,
        footer: {
            text: "Bapharia.com",
            icon_url: "https://bapharia.com/images/logo.png"
        }
    }]

    return { embeds }
}



module.exports = {
    data: command,
    execute(interaction) {
        return interaction.reply(getSdCommandResponse())
    },
};