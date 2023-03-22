FROM node:14 as builder

WORKDIR /projects

COPY package*.json .

RUN npm install

RUN npm i nodemon -g

COPY . /projects

FROM node:14-alpine as runner

WORKDIR /projects

COPY --from=builder /projects .


