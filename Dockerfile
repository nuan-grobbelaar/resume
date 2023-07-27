FROM node:latest

WORKDIR /app

COPY . .

RUN npm i --legacy-peer-deps
