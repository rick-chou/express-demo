FROM node:16.17.1-alpine3.15 
ENV APP_PATH=/

WORKDIR $APP_PATH
COPY ./package*.json ./
RUN npm ci
COPY . .

EXPOSE 3000

CMD [ "npm","start" ]