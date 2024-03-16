FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN chown -R node:node /app

USER root
RUN npm install

USER node

COPY --chown=node:node . .

CMD ["npm", "start"]
