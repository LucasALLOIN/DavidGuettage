import {Message} from "discord.js";
import {AppDiscord} from "../App";
import {Music, musicManager} from "../music/musicManager";

export default async function queue(message: Message, app: AppDiscord): Promise<void> {
    if (musicManager.queue.length !== 0) {
        await Promise.all(musicManager.queue.map(async (item: Music, index: number) => {
            await message.channel.send(`${(index === 0) ? "Current song" : index + 1}. **${item.name}**.`)
        }));
    } else {
        await message.reply("There is no song in queue.")
    }
}
