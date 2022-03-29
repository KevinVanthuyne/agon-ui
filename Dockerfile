# Stage 1: Build the Angular app
FROM node:16-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the app with nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/scored-ui /etc/nginx/html

EXPOSE 80
