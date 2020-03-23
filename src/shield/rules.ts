import {Message, Role} from "discord.js";
import {AppDiscord} from "../App";
import {ConfigFile} from "../config";

export type RuleFn = (ctx: Message, app: AppDiscord) => Promise<boolean>;

export async function isAdmin(ctx: Message, app: AppDiscord): Promise<boolean> {
    const configFile: ConfigFile = require("../../config/config.json");

    const role: Role | undefined = ctx.member?.roles.cache.array().find((value: Role) => {
        return configFile.adminRoleId.indexOf(value.id) !== -1
    });
    return !!role;
}
