import {Client, Message, VoiceConnection} from "discord.js";
import ping from "./ping";
import {AppDiscord} from "../App";
import join from "./join";
import play from "./play";
import pause from "./pause";
import stop from "./stop"
import kill from "./kill";
import {isAdmin, RuleFn} from "../shield/rules";

export type MessageEventFn = (message: Message, app: AppDiscord) => Promise<void>
export interface MessageEventObj {
    eventFn: MessageEventFn,
    shield?: Array<RuleFn>,
}
export type MessageEventMap = Map<string, MessageEventObj>

export const onMessageEvent: MessageEventMap = new Map([
    ["ping", {
        eventFn: ping
    }],
    ["join", {
        eventFn: join
    }],
    ["play", {
        eventFn: play
    }],
    ["pause", {
        eventFn: pause
    }],
    ["stop", {
        eventFn: stop
    }],
    ["kill", {
        eventFn: kill,
        shield: [isAdmin]
    }]
]);
