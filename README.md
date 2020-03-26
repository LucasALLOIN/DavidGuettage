# David Guettage

A simple Discord bot written in typescript.

For song command, it will search on youtube, so you need an youtube api v3 key.

Currently support:
 - !ping: reply pong.
 - !join: Join a voice channel
 - !play: Add a music to queue (ex: !play Ave Maria).
 - !next: Play next song in queue.
 - !replay: Play current song from beginning.
 - !pause: Pause or resume music (toggle).
 - !queue: Display the current song queue.
 - !search: Display the 5 first occurrences on youtube.
 - !kill: Kill the bot properly.
 
 It's also support a shield system, that means you can set rule to check if user is admin for exemple. 
 
# Install manually

You need to set DISCORD_API_TOKEN & YOUTUBE_API_KEY env variable, for exemple if you are using bash it's:

```shell script
export DISCORD_API_TOKEN=YOURTOKEN
export YOUTUBE_API_KEY=YOURAPIKEY
```

Here we go:

```shell script
git clone git@github.com:LucasALLOIN/DavidGuettage.git
cd DavidGuettage
```

If you are using npm:
```shell script
npm i
npm run build
npm run start
```

If you are using yarn:
```shell script
yarn
yarn build
yarn start
```

# Docker installation
Because we are in 2020.

```shell script
git clone git@github.com:LucasALLOIN/DavidGuettage.git
cd DavidGuettage

docker build -t davidguettage/latest .
docker run --env DISCORD_API_TOKEN=YOURTOKEN --env YOUTUBE_API_KEY=YOURAPIKEY davidguettage/latest
```
