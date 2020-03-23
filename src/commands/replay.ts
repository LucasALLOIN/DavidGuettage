import {Message} from "discord.js";
import {AppDiscord} from "../App";
import {musicManager} from "../music/musicManager";

export default async function replay(message: Message, app: AppDiscord): Promise<void> {
    if (!app.dispatcher) {
        await message.reply("I'm not currently playing any song.");
        return;
    }
    musicManager.queue.unshift(musicManager.queue[0]);
    app.dispatcher.end();
}
