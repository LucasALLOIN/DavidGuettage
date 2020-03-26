import {Message} from "discord.js";
import {AppDiscord} from "../App";
import {musicManager} from "../music/musicManager";

const YouTube = require('youtube-node');

const YT: any = new YouTube();

YT.setKey(`${process.env.YOUTUBE_API_KEY}`);

export default async function search(message: Message, app: AppDiscord): Promise<void> {
    if (!app.voiceConnection) {
        await message.reply("I need to join a voice channel first, summon me with !join.");
        return
    }
    const messageArray: Array<string> = message.content.split(" ");
    const title: string = messageArray.slice(1, messageArray.length).join(" ");

    if (!messageArray[1]) {
        await message.reply("You need to specify an soundname to play.");
        return
    }

    YT.search(title, 5, {}, async (error, result) => {
        if (error)
            console.warn(error);
        else {
            if (result.items[0]) {
                await Promise.all(result.items.map(async (item, index) => {
                    const videoTitle: string = item.snippet.title;

                    await message.channel.send(`Found **${videoTitle}** at position ${index + 1}.`)
                }));
            } else {
                await message.reply(`Error: No music found with **${title}** query.`)
            }
        }
    });
}
