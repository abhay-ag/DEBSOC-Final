FROM node:15.4 as build 

WORKDIR /react-app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]