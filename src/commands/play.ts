import {Message} from "discord.js";
import {AppDiscord} from "../App";
import ytdl from "ytdl-core"

const youtubeUrl: string = "https://www.youtube.com/watch?v=";

export default async function play(message: Message, app: AppDiscord): Promise<void> {
    if (!app.voiceConnection) {
        await message.reply("I need to join a voice channel first, summon me with !join.");
        return
    }

    const messageArray: Array<string> = message.content.split(" ");

    if (!messageArray[1] || messageArray[1].slice(0, youtubeUrl.length) !== youtubeUrl) {
        await message.reply("You need to specify an youtube url to play.")
        return
    }
    if (app.dispatcher) {
        app.dispatcher.destroy();
        app.dispatcher = undefined;
    }
    app.dispatcher = app.voiceConnection?.play(ytdl(messageArray[1], { filter: 'audioonly' }))
}
