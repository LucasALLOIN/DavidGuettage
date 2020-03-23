import {Message} from "discord.js";
import {AppDiscord} from "../App";

export type RuleFn = (ctx: Message, app: AppDiscord) => Promise<boolean>;

export async function isAdmin(ctx: Message, app: AppDiscord): Promise<boolean> {

    return true
}
