const { SlashCommandBuilder } = require('discord.js');
const commandTexts = require("../../../Text/en/commands.json");
const { DateTime } = require("luxon");
const raidTimes = require("./raidTimes.json")

// TODO: Get raid times and active raids from bapharia (a static API would work) for consistency across the webhooks.

const { name, description } = commandTexts.raids

const command = new SlashCommandBuilder()
    .setName(name)
    .setDescription(description)

function getRaidsCommandResponse() {
    const activeRaids = ["rai001", "rai007_Hard"]
    const activeDefensiveBattles = []

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

    let upcomingTimeSlot;
    let activeTimeSlot;

    const message = allRaidsThisWeek.map((dateTime, index) => {
        const isUpcomingRaid = dateTime > now
        const isCurrentlyActiveRaid = dateTime <= now && dateTime.plus({ hour: 1 }) > now
        const unixTimestamp = dateTime.toUnixInteger()

        let outputString = `<t:${unixTimestamp}:F>\n`

        if (isCurrentlyActiveRaid && !activeTimeSlot) {
            outputString = `**__:arrow_right:<t:${unixTimestamp}:F>__**\n`
            activeTimeSlot = unixTimestamp
        }
        else if (isUpcomingRaid && !upcomingTimeSlot && !activeTimeSlot) {
            outputString = `**__:arrow_right:<t:${unixTimestamp}:F>__**\n`
            upcomingTimeSlot = unixTimestamp
        }

        return outputString
    })
        .join("")

    // Fallback to first raid of the week (if no upcoming or no active)
    let nextRaidMessage =
        activeTimeSlot ?
            `## :sparkles: Currently open until <t:${activeTimeSlot + 3600}:t>`
            : `## :hourglass: Next raid at <t:${upcomingTimeSlot || allRaidsThisWeek[0].plus({ week: 1 }).toUnixInteger()}:t>`

    const embeds = [...activeRaids, ...activeDefensiveBattles].map(contentId => {
        return {
            title: "Raid & Defensive Battle Schedule",
            url: "https://bapharia.com/guides/missions",
            description: `Here's the schedule for this week. Note that this does not take into account game downtime, or updates that may change the active Raid(s) or Defensive Battle(s). Timestamps are converted to your local time.\n\n${message}${nextRaidMessage}`,
            color: activeTimeSlot ? 0x0fe00b : 0xff0000,
            image: { url: `https://bapharia.com/guides/missions/${contentId}_entry.png` },
            footer: {
                text: "Bapharia.com",
                icon_url: "https://bapharia.com/images/logo.png"
            }
        }
    })


    return { embeds }
}



module.exports = {
    data: command,
    execute(interaction) {
        return interaction.reply(getRaidsCommandResponse())
    },
};