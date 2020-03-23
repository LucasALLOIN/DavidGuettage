import {Client, Message, VoiceConnection} from "discord.js";
import ping from "./ping";
import {AppDiscord} from "../App";
import join from "./join";
import play from "./play";
import pause from "./pause";
import stop from "./stop"
import kill from "./kill";

export type MessageEventFn = (message: Message, app: AppDiscord) => Promise<void>
export type MessageEventMap = Map<string, MessageEventFn>

export const onMessageEvent: MessageEventMap = new Map([
    ["ping", ping],
    ["join", join],
    ["play", play],
    ["pause", pause],
    ["stop", stop],
    ["kill", kill]
]);
