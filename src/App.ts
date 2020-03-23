import {
    Client,
    Message, StreamDispatcher, VoiceConnection
} from "discord.js";
import * as process from "process";
import {MessageEventFn, onMessageEvent} from "./commands";

enum Answers {
    notFound = "Command not found...",
    dmNotSupported = "Dm are not supported"
}

export class AppDiscord {
    private readonly _client: Client;
    private readonly _prefix: string;
    private _voiceConnection: VoiceConnection | undefined;
    private _dispatcher: StreamDispatcher | undefined;

    constructor(prefix: string) {
        this._client = new Client();
        this._prefix = prefix;
        this._voiceConnection = undefined;

        this._client.login(process.env.DISCORD_API_TOKEN).then((_) => {
            console.log("Connected to DiscordAPI.");
            this.registerEvents();
        }).catch(() => {
            console.error("Invalid api token.")
        });
    }

    private async registerEvents() {
        this.onMessage();
    }

    private async onMessage() {
        this._client.on("message", async (message: Message) => {
            if (message.content.slice(0, 1) === this._prefix && !message.author.bot) {
                message.content = message.content.slice(1, message.content.length);
                if (!message.guild) {
                    await message.reply(Answers.dmNotSupported);
                    return;
                }
                const messageArray: Array<string> = message.content.split(" ");
                const fn: MessageEventFn | undefined = onMessageEvent.get(messageArray[0]);
                if (fn)
                    await fn(message, this);
                else
                    await message.reply(Answers.notFound)
            }
        })
    }

    get dispatcher(): StreamDispatcher | undefined {
        return this._dispatcher;
    }

    set dispatcher(value: StreamDispatcher | undefined) {
        this._dispatcher = value;
        this._dispatcher?.on("finish", () => {
            this._dispatcher?.destroy();
            this._dispatcher = undefined
        })
    }

    get voiceConnection(): VoiceConnection | undefined {
        return this._voiceConnection;
    }

    set voiceConnection(value: VoiceConnection | undefined) {
        this._voiceConnection = value;
    }

    get client(): Client {
        return this._client;
    }

    get prefix(): string {
        return this._prefix;
    }
}

new AppDiscord("!");
