
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY packages packages
COPY projects/admin-portal projects/admin-portal

RUN npm install
RUN npm run build:admin

FROM nginx:alpine

COPY --from=builder /app/projects/admin-portal/dist /usr/share/nginx/html
COPY projects/admin-portal/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
