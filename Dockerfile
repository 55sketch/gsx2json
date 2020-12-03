FROM node:12 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:12-alpine
WORKDIR /app
COPY --from=base /app .
COPY . .

EXPOSE 3000
CMD ["node", "app.js"]