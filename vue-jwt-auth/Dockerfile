# Stage 1
FROM node:14 as build-stage

WORKDIR /vue-jwt-auth
COPY package.json .
RUN npm install
COPY . .

ARG VUE_APP_API_BASE_URL
ENV VUE_APP_API_BASE_URL=$VUE_APP_API_BASE_URL

RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /vue-jwt-auth/dist /usr/share/nginx/html
EXPOSE $VUE_DOCKER_PORT

CMD nginx -g 'daemon off;'