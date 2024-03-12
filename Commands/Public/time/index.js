const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const commandTexts = require("../../../Text/en/commands.json");
const { DateTime } = require("luxon");

// Can't get users' time zones (they would have to manually provide it), so can't make a reverse converter (local time to JST)
// time defaults to start of the current day in japan
// date defaults to the current date in japan

const { name, description, options } = commandTexts.time

const command = new SlashCommandBuilder()
    .setName(name)
    .setDescription(description)
    .addStringOption(option =>
        option
            .setName(options[0].name)
            .setDescription(options[0].description)
    )
    .addStringOption(option =>
        option
            .setName(options[1].name)
            .setDescription(options[1].description)
    )

function getLocalTimeCommandResponse(time, date) {
    const fullDateFormat = { year: "numeric", month: "long", day: "numeric", weekday: "long", hour: "numeric", minute: "numeric" }

    // Neither time nor date provided
    if (!time && !date) {
        const now = DateTime.now().setZone("Asia/Tokyo")
        return {
            embeds: [{
                title: `Current time`,
                fields: [
                    {
                        name: `JST`,
                        value: now.toLocaleString(fullDateFormat)
                    },
                    {
                        name: `Local Time`,
                        value: `<t:${now.toUnixInteger()}:F> (<t:${now.toUnixInteger()}:R>)\n\n[Timestamp](https://gist.github.com/LeviSnoot/d9147767abeef2f770e9ddcd91eb85aa): \`${now.toUnixInteger()}\``
                    }
                ],
                color: 0x0099ff,
                footer: {
                    text: "Bapharia.com",
                    icon_url: "https://bapharia.com/images/logo.png"
                }
            }]
        }
    }

    // Only date provided
    if (!time && date) {
        const jst = DateTime.fromISO(date, { zone: "Asia/Tokyo" })

        return {
            embeds: [{
                title: "Converting JST to Local Time",
                fields: [
                    {
                        name: `JST`,
                        value: jst.toLocaleString(fullDateFormat)
                    },
                    {
                        name: `Local Time`,
                        value: `<t:${jst.toUnixInteger()}:F> (<t:${jst.toUnixInteger()}:R>)\n\n[Timestamp](https://gist.github.com/LeviSnoot/d9147767abeef2f770e9ddcd91eb85aa): \`${jst.toUnixInteger()}\``
                    }
                ],
                color: 0x0099ff,
                footer: {
                    text: "Bapharia.com",
                    icon_url: "https://bapharia.com/images/logo.png"
                }
            }]
        }
    }

    // Time and, optionally, date provided
    const input = date ? `${date}T${time}` : time
    const jst = DateTime.fromISO(input, { zone: "Asia/Tokyo" })
    const output = date ? `<t:${jst.toUnixInteger()}:F>` : `<t:${jst.toUnixInteger()}:t>`
    const jstFormat = date ? fullDateFormat : { hour: "numeric", minute: "numeric" }

    return {
        embeds: [{
            title: "Converting JST to Local Time",
            fields: [
                {
                    name: `JST`,
                    value: jst.toLocaleString(jstFormat)
                },
                {
                    name: `Local Time`,
                    value: `${output} (<t:${jst.toUnixInteger()}:R>)\n\n[Timestamp](https://gist.github.com/LeviSnoot/d9147767abeef2f770e9ddcd91eb85aa): \`${jst.toUnixInteger()}\``
                }
            ],
            color: 0x0099ff,
            footer: {
                text: "Bapharia.com",
                icon_url: "https://bapharia.com/images/logo.png"
            }
        }]
    }
}

module.exports = {
    data: command,
    execute(interaction) {
        const time = interaction.options.getString(options[0].name)
        const date = interaction.options.getString(options[1].name)
        return interaction.reply(getLocalTimeCommandResponse(time, date))
    },
};