import {Message} from "discord.js";
import {AppDiscord} from "../App";
import {musicManager} from "../music/musicManager";

export default async function next(message: Message, app: AppDiscord): Promise<void> {
    if (!app.dispatcher) {
        await message.reply("I'm not currently playing any song.");
        return;
    }
    if (musicManager.queue.length <= 1) {
        await message.reply("No more song in queue.");
        return;
    }
    app.dispatcher.end();
}
