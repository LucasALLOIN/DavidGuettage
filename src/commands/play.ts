import {Message} from "discord.js";
import {AppDiscord} from "../App";
import {musicManager} from "../music/musicManager";
const YouTube = require('youtube-node');

const YT: any = new YouTube();

YT.setKey(`${process.env.YOUTUBE_API_KEY}`);

export default async function play(message: Message, app: AppDiscord): Promise<void> {
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

    YT.search(title, 1, {}, (error, result) => {
        if (error)
            console.warn(error);
        else {
            const videoId: string = result.items[0].id.videoId;
            const videoTitle: string = result.items[0].snippet.title;

            musicManager.emit("addQueue", {id: videoId, name: videoTitle}, app);
            message.reply(`Adding **${videoTitle}** to queue. Will be played ${(musicManager.queue.length === 1) ? "now." : `in ${musicManager.queue.length - 1} song(s).`}`);
        }
    });
}
