import {Message} from "discord.js";
import {AppDiscord} from "../App";

export default async function stop(message: Message, app: AppDiscord): Promise<void> {
    if (!app.dispatcher) {
        await message.reply("I'm not playing any song.");
        return;
    }

    app.dispatcher.destroy();
    app.dispatcher = undefined;
}
