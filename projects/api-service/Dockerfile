FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY projects/api-service/ ./projects/api-service/

RUN npm install
RUN cd projects/api-service && npm install

WORKDIR /app/projects/api-service

EXPOSE 4000

CMD ["npm", "run", "start"]