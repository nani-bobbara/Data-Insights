
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY packages packages
COPY projects/web-portal projects/web-portal

RUN npm install
RUN npm run build:web

FROM nginx:alpine

COPY --from=builder /app/projects/web-portal/dist /usr/share/nginx/html
COPY projects/web-portal/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
