FROM node:16-alpine

WORKDIR /app

COPY server server
COPY server/db .
COPY package.json .
COPY server.js .

RUN npm install
RUN npm install -g sequelize-cli
RUN npm db:migrate
RUN db:seed

ENV NODE_ENV=production
CMD npm start