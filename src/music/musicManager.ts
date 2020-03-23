import * as events from "events";
import {AppDiscord} from "../App";
import ytdl from "ytdl-core";

export interface Music {
    id: string,
    name: string
}

export declare interface MusicManager {
    on(event: "launchQueue", listener: (appDiscord: AppDiscord) => void): this;
    on(event: "addQueue", listener: (music: Music, appDiscord: AppDiscord) => void): this;
    on(event: "playQueue", listener: (appDiscord: AppDiscord) => void): this;
    on(event: "playNext", listener: (appDiscord: AppDiscord) => void): this;
}

export class MusicManager extends events.EventEmitter {
    public queue: Array<Music> = [];
}

export const musicManager: MusicManager = new MusicManager();

musicManager.on("launchQueue", (appDiscord: AppDiscord) => {
    if (!appDiscord.voiceConnection)
        return;
    musicManager.emit("playQueue", appDiscord);
});

musicManager.on("addQueue", (music: Music, appDiscord: AppDiscord) => {
    musicManager.queue.push(music);
    if (musicManager.queue.length === 1)
        musicManager.emit("launchQueue", appDiscord);
});

musicManager.on("playQueue", (appDiscord: AppDiscord) => {
    const musicToPlay: Music = musicManager.queue[0];

    appDiscord.client.user?.setActivity({name: musicToPlay.name, type: "LISTENING"});
    appDiscord.dispatcher = appDiscord.voiceConnection?.play(ytdl(`https://www.youtube.com/watch?v=${musicToPlay.id}`, { filter: 'audioonly', quality: "highestaudio" }))
});

musicManager.on("playNext", (appDiscord: AppDiscord) => {
    if (musicManager.queue.length === 0)
        return;
    musicManager.emit("playQueue", appDiscord);
});
