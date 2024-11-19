# Stage 1: Build the Angular app
FROM node:18-alpine AS node
#ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build --omit=dev

# Stage 2: Serve the app with nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/scored-ui/browser /etc/nginx/html

EXPOSE 80
