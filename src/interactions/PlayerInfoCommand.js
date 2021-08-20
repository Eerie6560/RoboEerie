import * as Discord from "discord.js";
import Mojang, {
    getNameHistoryByName,
    getProfileByName,
    getSkinDataByName,
    getSkinURLByName, getUUID
} from "mojang-minecraft-api";
import PonjoUtil from "../utils/PonjoUtil";

module.exports = {
    name: "interactionCreate",
    once: false,
    async execute(interaction, client) {

        if (!interaction.isCommand()) return;

        if (interaction.commandName === "playerinfo") {

            const player = interaction.options.getString("player");
            const query = interaction.options.getString("query");

            switch (query) {

                case "name-history":

                    await getNameHistoryByName(player)

                        .then(data => {

                            const names = data.map(e => e.name).join(", ");

                            const embed = new Discord.MessageEmbed()
                                .setTitle(player + "'s Usernames")
                                .setColor("#00e1ff")
                                .setDescription(names)
                                .setFooter("Ponjo", client.user.displayAvatarURL({dynamic: true}))
                                .setTimestamp()

                            return interaction.reply({embeds: [embed]});

                        }).catch(error => {

                            return interaction.reply({embeds: [PonjoUtil.getErrorMessageEmbed(client, "Previous usernames could not be found.")]});

                        });

                    break;

                case "skin":

                    await getSkinDataByName(player)

                        .then(data => {

                            const url = data.textures.SKIN.url;
                            const timestamp = Math.round((new Date()).getTime() / 1000);

                            const embed = new Discord.MessageEmbed()
                                .setAuthor(player + "'s Skin", "https://mc-heads.net/head/" + player)
                                .setThumbnail("https://mc-heads.net/body/" + player)
                                .setColor("#00e1ff")
                                .setDescription(`You are viewing the skin of ${player} currently. If you'd like to download this skin for yourself, you can do so by [clicking here](${url}).` + `\n\n` + `API request sent: <t:${timestamp}>`)
                                .setFooter("Ponjo", client.user.displayAvatarURL({dynamic: true}))
                                .setTimestamp()

                            return interaction.reply({embeds: [embed]});

                        }).catch(error => {

                            return interaction.reply({embeds: [PonjoUtil.getErrorMessageEmbed(client, "Skin not found for that player.")]});

                        });

                    break;

                case "head":

                    const embed = new Discord.MessageEmbed()
                        .setTitle(player + "'s Head")
                        .setImage("https://mc-heads.net/head/" + player)
                        .setColor("#00e1ff")
                        .setFooter("Ponjo", client.user.displayAvatarURL({dynamic: true}))
                        .setTimestamp()

                    return interaction.reply({embeds: [embed]});

                    break;

                case "uuid":

                    await getUUID(player)

                        .then(data => {

                            const embed = new Discord.MessageEmbed()
                                .setAuthor(data.name + "'s UUID", "https://mc-heads.net/head/" + player)
                                .setColor("#00e1ff")
                                .setDescription("UUID: `" + data.id + "`")
                                .setFooter("Ponjo", client.user.displayAvatarURL({dynamic: true}))
                                .setTimestamp()

                            return interaction.reply({embeds: [embed]})

                        }).catch(error => {

                            return interaction.reply({embeds: [PonjoUtil.getErrorMessageEmbed(client, "Invalid username. Please try again.")]});

                        });

                    break;

            }
        }
    }
}