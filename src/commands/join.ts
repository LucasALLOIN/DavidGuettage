import {Message} from "discord.js";
import {AppDiscord} from "../App";

export default async function join(message: Message, app: AppDiscord): Promise<void> {
    if (message.member?.voice.channel) {
        app.voiceConnection = await message.member?.voice.channel.join();
    } else {
        await message.reply("You are not connected to a voice channel.")
    }
}
