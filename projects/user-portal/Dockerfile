
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY packages packages
COPY projects/user-portal projects/user-portal

RUN npm install
RUN npm run build:user

FROM nginx:alpine

COPY --from=builder /app/projects/user-portal/dist /usr/share/nginx/html
COPY projects/user-portal/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
