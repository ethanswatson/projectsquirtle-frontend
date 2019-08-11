FROM node:10.16.2-alpine
EXPOSE 8000 9229

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm ci

COPY . /home/app

RUN npm run build

CMD ./scripts/start.sh