FROM node:20.17-bookworm-slim

WORKDIR /app

COPY package*.json .
RUN npm ci
COPY . .

CMD ["npm", "run", "start"]