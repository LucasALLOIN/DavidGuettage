import {Message} from "discord.js";
import {AppDiscord} from "../App";

export default async function pause(message: Message, app: AppDiscord): Promise<void> {
    if (!app.dispatcher) {
        await message.reply("I'm not playing any song.");
        return;
    }

    if (app.dispatcher.paused)
        app.dispatcher.resume();
    else
        app.dispatcher.pause()
}
