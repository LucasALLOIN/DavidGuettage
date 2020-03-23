# David Guettage

A simple Discord bot written in typescript.

Currently support:
 - !ping: reply pong.
 - !join: Join a voice channel
 - !play: Play a music (currently only supporting youtube link.).
 - !pause: Pause or resume music.
 - !stop: Stop music.
 - !kill: Kill the bot properly.
 
 It's also support a shield system, that means you can set rule to check if user is admin for exemple. 
 
# Install manually

You need to set DISCORD_API_TOKEN env variable, for exemple if you are using bash it's:

```shell script
export DISCORD_API_TOKEN=YOURTOKEN
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
docker run --env DISCORD_API_TOKEN=YOURTOKEN davidguettage/latest
```
