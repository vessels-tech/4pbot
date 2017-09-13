FROM node:8.5.0-alpine

ENV APP_DIR /usr/src/app
RUN mkdir -p "$APP_DIR"
WORKDIR "$APP_DIR"

RUN apk add --update bash


COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY ./src ./src

RUN yarn build
CMD ["yarn", "start"]
