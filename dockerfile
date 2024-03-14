FROM node:18-alpine

USER node

WORKDIR /app

COPY package*.json ./

USER root
RUN npm install
USER node

COPY . .

CMD ["npm", "start"]