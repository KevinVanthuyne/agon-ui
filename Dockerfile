# Stage 1: Build the Angular app
FROM node:16-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the app with nginx
FROM nginx:alpine
COPY --from=node /app/dist/scored-ui /usr/share/nginx/html
