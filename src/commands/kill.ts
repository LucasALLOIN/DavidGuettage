import {Message} from "discord.js";
import {AppDiscord} from "../App";

export default async function kill(message: Message, app: AppDiscord): Promise<void> {
    if (app.dispatcher) {
        app.dispatcher.destroy();
        app.dispatcher = undefined
    }
    if (app.voiceConnection) {
        app.voiceConnection.disconnect();
        app.voiceConnection = undefined;
    }
    await message.reply("I'm shutting down.");
    app.client.destroy();
}
