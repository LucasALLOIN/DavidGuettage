FROM node:alpine

WORKDIR /home/node/app

RUN apk add ffmpeg

COPY . .
RUN yarn
RUN yarn build

CMD ["yarn", "start"]
