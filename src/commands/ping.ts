import {Message} from "discord.js";

export default async function ping(message: Message): Promise<void> {
    console.log(message.member?.roles.cache);
    await message.reply("Pong !");
}
