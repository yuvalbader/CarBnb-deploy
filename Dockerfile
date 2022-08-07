FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g sequelize-cli
RUN npm run build:client 
RUN npm run db:migrate
# RUN npm run db:seed

ENV NODE_ENV=production
CMD npm start