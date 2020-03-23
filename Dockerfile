FROM node:alpine

WORKDIR /home/node/app

COPY . .
RUN yarn
RUN yarn build

CMD ["yarn", "start"]
