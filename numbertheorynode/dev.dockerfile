
FROM node:14.11.0-alpine3.10

WORKDIR /src/client/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]