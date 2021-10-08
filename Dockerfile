FROM node:16.8.0 as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

ENV NGINX_PORT=80

EXPOSE ${NGINX_PORT}

COPY ./nginx/templates /etc/nginx/templates
COPY --from=builder /app/dist .
