import {Client, Message, VoiceConnection} from "discord.js";
import {AppDiscord} from "../App";
import {isAdmin, RuleFn} from "../shield/rules";
import ping from "./ping";
import join from "./join";
import play from "./play";
import pause from "./pause";
import kill from "./kill";
import next from "./next";
import replay from "./replay";
import search from "./search";
import queue from "./queue";

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
    ["next", {
        eventFn: next
    }],
    ["replay", {
        eventFn: replay
    }],
    ["pause", {
        eventFn: pause
    }],
    ["search", {
        eventFn: search
    }],
    ["queue", {
        eventFn: queue
    }],
    ["kill", {
        eventFn: kill,
        shield: [isAdmin]
    }]
]);
